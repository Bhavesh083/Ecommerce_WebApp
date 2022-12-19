import axios from 'axios';
import React,{useEffect,useState} from 'react';
import './Reviews.css';
import {useSelector} from 'react-redux';
import Sentiment from 'sentiment';
const sentiment = new Sentiment();

function Reviews({id}) {

  const userDet = useSelector(state => state.loginReducer.user); 
  const signin = useSelector(state => state.loginReducer.notlogin);

  const [phrase, setPhrase] = useState('');
  const [sentimentScore, setSentimentScore] = useState(null);
  const [reviews,setReviews] = useState([]);

  useEffect(() => { 
    const obj = {
      id : id
    }
    axios.post("http://localhost:5000/item/fetchProduct",obj)
        .then(res => {
          setReviews(res.data);
        })
        .catch(err => console.log("Error in fetching reviews")); 
  },[]); 

  useEffect(() => {
    setSentimentScore(sentiment.analyze(phrase));
  }, [phrase]);


const addPoint = () => {
  if(signin){
    const obj = {
      id : id,
      reviews : [{
        review : phrase,
        points : sentimentScore.score,
        by : userDet.name
      }]
    }
    axios.post("http://localhost:5000/item/addReview",obj)
        .then(res => {
          setPhrase('');
          setReviews([...obj.reviews,...reviews]);
        })
        .catch(err => console.log("Error in adding reviews")); 
  }
  else{
    window.alert("Please login to add the review!");
  }
}
  
  
  return (
    <div className="Review">
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <input value={phrase} onChange={e => setPhrase(e.target.value)}  placeholder='Write a review . . . . . .' style={{ backgroundColor:'transparent' , padding: '5px', fontSize: '15px', width: '95%', minHeight:'0px', marginLeft:'2%',marginRight:'0%', border:'none',borderBottom:'2px solid black',marginBottom:'15px'}}/>
          <button onClick={() => addPoint()} style={{textAlign:'center',alignItems:'center',width:'10%',border:'none',margin:'0px 0px 0px -10px',padding: '0',backgroundColor: 'transparent'}}><i className="fas fa-arrow-right"></i></button>
      </div>
      <div>
        <p className="Review-header">Top reviews <i className="fas fa-thumbs-up"></i></p>
      </div>
      {reviews.map(rev => (rev.points>3)?
        <div className='Review-header-map' key={rev.id}>
          <div className='point-review'>
            <p>😍</p>
            <span>{rev.review}</span>
          </div>
          <div className='point-by-cls'>
            <span> <i className="fas fa-pen"></i> {rev.by}</span>
          </div>
        </div>:null
      )}
      {reviews.map(rev => (rev.points>0 && rev.points<4)?
        <div className='Review-header-map' key={rev.id}>
          <div className='point-review'>
            <p>🙂</p>
            <span>{rev.review}</span>
          </div>
          <div className='point-by-cls'>
            <span> <i className="fas fa-pen"></i> {rev.by}</span>
          </div>
        </div>:null
      )}
      {reviews.map(rev => (rev.points<=0)?
        <div className='Review-header-map' key={rev.id}>
          <div className='point-review'>
            <p>😒</p>
            <span>{rev.review}</span>
          </div>
          <div className='point-by-cls'>
            <span> <i className="fas fa-pen"></i> {rev.by}</span>
          </div>
        </div>:null
      )}
    </div>
  );
}
export default Reviews;
