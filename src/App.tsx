import React, { useEffect, useState } from 'react';
import { getPosts, getPostValue } from "./redux/features/postSlice"
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';

function App() {
  const posts = useAppSelector(getPostValue)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [])
  return (
    <>{posts && posts?.particularities}</>
    // <>{posts.length > 0 && posts.map((item:any) => {
    //  return(<h5 key={item.project_id}>{item.particularities}</h5>) 
    // })}</>
  );

}

export default App;
