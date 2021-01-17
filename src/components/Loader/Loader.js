import React from 'react';
import st from './Loader.module.css';

export default function Loader() {
  return (
    <div className={st.loader_wrap}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
