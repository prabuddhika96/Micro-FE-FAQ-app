import React, { useState } from "react";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";

function AnswerCard({ answer }: any) {
  const [likeStatus, setLikeStatus] = useState<any>(answer?.likeStatus);
  const [likeCount, setLikeCount] = useState(answer?.likes);
  const [dislikeCount, setDislikeCount] = useState(answer?.dislikes);

  const handleLikeStatus = () => {
    if (likeStatus == true) {
      setLikeStatus("none");
      setLikeCount(likeCount - 1);
    } else {
      if (likeStatus == false) {
        setDislikeCount(dislikeCount - 1);
      }
      setLikeStatus(true);
      setLikeCount(likeCount + 1);
    }
  };

  const handleDisLikeStatus = () => {
    if (likeStatus == false) {
      setLikeStatus("none");
      setDislikeCount(dislikeCount - 1);
    } else {
      if (likeStatus == true) {
        setLikeCount(likeCount - 1);
      }
      setLikeStatus(false);
      setDislikeCount(dislikeCount + 1);
    }
  };
  return (
    <div className="answer-card">
      <p className="answer-card-answer">{answer?.answer}</p>
      <div className="answer-card-bottom">
        <div>
          {likeStatus == true ? (
            <BiSolidLike onClick={handleLikeStatus} className="like-btn" />
          ) : (
            <BiLike onClick={handleLikeStatus} className="like-btn" />
          )}
          <p className="like-count">{likeCount}</p>
        </div>

        <div>
          <div>
            {likeStatus == false ? (
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
