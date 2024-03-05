import React, { useState } from "react";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";

function AnswerCard({ answer }: any) {
  const [likeStatus, setLikeStatus] = useState<any>(answer?.userChoice);
  const [likeCount, setLikeCount] = useState(answer?.likesCount);
  const [dislikeCount, setDislikeCount] = useState(answer?.dislikesCount);

  const handleLikeStatus = () => {
    if (likeStatus == "Like") {
      setLikeStatus("Default");
      setLikeCount(likeCount - 1);
    } else {
      if (likeStatus == "Dislike") {
        setDislikeCount(dislikeCount - 1);
      }
      setLikeStatus("Like");
      setLikeCount(likeCount + 1);
    }
  };

  const handleDisLikeStatus = () => {
    if (likeStatus == "Dislike") {
      setLikeStatus("Default");
      setDislikeCount(dislikeCount - 1);
    } else {
      if (likeStatus == "Like") {
        setLikeCount(likeCount - 1);
      }
      setLikeStatus("Dislike");
      setDislikeCount(dislikeCount + 1);
    }
  };
  return (
    <div className="answer-card">
      <p className="answer-card-answer">{answer?.description}</p>
      <div className="answer-card-bottom">
        <div>
          {likeStatus == "Like" ? (
            <BiSolidLike onClick={handleLikeStatus} className="like-btn" />
          ) : (
            <BiLike onClick={handleLikeStatus} className="like-btn" />
          )}
          <p className="like-count">{likeCount}</p>
        </div>

        <div>
          <div>
            {likeStatus == "Dislike" ? (
              <BiSolidDislike
                onClick={handleDisLikeStatus}
                className="like-btn"
              />
            ) : (
              <BiDislike onClick={handleDisLikeStatus} className="like-btn" />
            )}
          </div>
          <p className="like-count">{dislikeCount}</p>
        </div>

        {/* user name */}
        <p>{answer?.userName}</p>
      </div>
    </div>
  );
}

export default AnswerCard;
