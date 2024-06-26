import { useContext, useEffect, useState } from 'react';
import styles from './write.module.css';
import { RiImageAddLine } from 'react-icons/ri';
import { Context } from '../../context/Contex';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Write = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [blog, setBlog] = useState();
  const { user } = useContext(Context);
  const [error, setError] = useState('');

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postBlog = async () => {
      const addBlog = {
        title: title,
        desc: description,
      };

      if (!file) {
        setError('Lütfen bir fotoğraf seçin.');
        return;
      }

      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append('name', filename);
        data.append('file', file);
        addBlog.photo = file;
      }

      try {
        const response = await axios.post('/blog/add', addBlog, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setBlog(response.data._id);
        console.log(response.data.title);
        console.log(response.data.photo);

        console.log(response.data);
        window.location.replace(`${response.data._id}`);
      } catch (err) {
        console.log(err);
      }
    };
    postBlog();
  };

  return (
    <div className={styles.write}>
      <form onSubmit={handleSubmit} className={styles.writeForm}>
        <div className={styles.writeFormGroup}>
          <input
            type='text'
            className={styles.writeInput}
            autoFocus={true}
            placeholder='Başlık ekle'
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className={styles.fileInput} htmlFor='fileInput'>
            <RiImageAddLine /> Fotoğraf ekle
          </label>
          <input
            type='file'
            id='fileInput'
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: 'none' }}
            className={styles.file}
          />
        </div>
        <div className={styles.writeFormGroup}>
          <textarea
            placeholder='Hikayeni yaz...'
            type='text'
            className={styles.writeText}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button className={styles.writeSubmit} type='submit'>
          Yayınla
        </button>
      </form>
    </div>
  );
};

export default Write;
