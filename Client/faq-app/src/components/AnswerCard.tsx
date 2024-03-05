import React, { useEffect, useState } from "react";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import AnswerService from "../services/AnswerService";
import { CircularProgress } from "@mui/material";

function AnswerCard({ answer }: any) {
  const [likeStatus, setLikeStatus] = useState<any>(answer?.userChoice);
  const [likeCount, setLikeCount] = useState(answer?.likesCount);
  const [dislikeCount, setDislikeCount] = useState(answer?.dislikesCount);
  const [likeBtnStatus, setLikeBtnStatus] = useState<boolean>(false);
  const [dislikeBtnStatus, setDisLikeBtnStatus] = useState<boolean>(false);

  const handleLikeStatus = () => {
    if (!dislikeBtnStatus) {
      setLikeBtnStatus(true);
      setTimeout(() => {
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
        setLikeBtnStatus(false);
      }, 1000);
    }
  };

  const handleDisLikeStatus = () => {
    if (!likeBtnStatus) {
      setDisLikeBtnStatus(true);
      setTimeout(() => {
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
        setDisLikeBtnStatus(false);
      }, 1000);
    }
  };
  return (
    <div className="answer-card">
      <p className="answer-card-answer">{answer?.description}</p>
      <div className="answer-card-bottom">
        <div onClick={handleLikeStatus}>
          {likeBtnStatus === true ? (
            <CircularProgress size={15} />
          ) : (
            <>
              {likeStatus == "Like" ? (
                <BiSolidLike
                  onClick={handleLikeStatus}
                  className={`like-btn ${
                    dislikeBtnStatus ? `like-btn-disable` : `like-btn-active`
                  }`}
                />
              ) : (
                <BiLike
                  onClick={handleLikeStatus}
                  className={`like-btn ${
                    dislikeBtnStatus ? `like-btn-disable` : `like-btn-active`
                  }`}
                />
              )}
            </>
          )}

          <p className="like-count">{likeCount}</p>
        </div>

        <div>
          <div>
            {dislikeBtnStatus === true ? (
              <CircularProgress size={15} />
            ) : (
              <>
                {likeStatus == "Dislike" ? (
                  <BiSolidDislike
                    onClick={handleDisLikeStatus}
                    className={`like-btn ${
                      likeBtnStatus ? `like-btn-disable` : `like-btn-active`
                    }`}
                  />
                ) : (
                  <BiDislike
                    onClick={handleDisLikeStatus}
                    className={`like-btn ${
                      likeBtnStatus ? `like-btn-disable` : `like-btn-active`
                    }`}
                  />
                )}
              </>
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
