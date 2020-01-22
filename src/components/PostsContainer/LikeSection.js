import React, {useState} from 'react';

const LikeSection = props => {
  // export default function LikeSection (props){

 const [letlike, setlike] = useState(props.likes);

const likePost = (e) =>{
    setlike (letlike +1)
}
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick = {likePost}/>
         {/* <i onClick = {event =>{
          setlike (letlike + 1);
        }} */}
        
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      {letlike}
      
      likes</p>
</div>
  )
};

export default LikeSection;
