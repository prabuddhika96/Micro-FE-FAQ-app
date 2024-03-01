import { BiSolidDislike,BiSolidLike } from "react-icons/bi";
import { TETextarea, TERipple } from "tw-elements-react";

export default function AnswerView() {

  return (
    <div>
      <div className="mx-auto items-center content-center flex justify-center mt-5">
        <div className="flex justify-center"></div>
        <ul className="w-10/12 mt-7">
          <li className="w-full rounded-lg bg-primary-100 p-4 ">
            Quesction .........................
            {/* <hr className="decoration-black"/> */}
            <p className="text-sm mx-7 mt-5">Question description</p>

          </li>
          


          <div className="mx-7 mt-7 flex">
            <li className="w-1/12 mt-4 flex">
              <div>
                <button >
                  <li>
                    <BiSolidLike className="mx-2" />
                  </li>
                </button>
                <div className="w-4 h-4 mx-2 border-2 text-xs"></div>
              </div>

              <div>
                <button>
                  <li>
                    <BiSolidDislike className="mx-2" />
                  </li>
                </button>
                <div className="w-4 h-4 mx-2 border-2 text-xs"></div>
              </div>
            </li>
            <li className="w-full border-b-2 flex border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              Answer
            </li>
            
          </div>
          
          <div className="mt-8">
            <TETextarea
              id="textareaExample"
              label="Add Your Answer"
              rows={3}
            ></TETextarea>
          </div>

          <div>
            <TERipple className="w-full">
              <button
                type="submit"
                className="mb-2 mt-1 w-full rounded border-2 px-6 pb-[6px] pt-2 text-xs
                 text-primary transition ease-in-out
                 hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10
                 hover:text-primary-600 focus:border-primary-600 focus:outline-none"
              >
                Add Answer
              </button>
            </TERipple>
          </div>
        </ul>
      </div>
    </div>
  );
}
