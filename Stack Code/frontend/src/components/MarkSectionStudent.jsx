import axios from "axios";
import { Trash2 } from "lucide-react";
import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import NoProjectsSvg from "../../public/NoProjects.svg";
import { UserContext } from "../context/UserContext";

const MarkSectionStudent = ({ isProjectExists, projectId }) => {
  const { email } = useContext(UserContext);
  const [isMarksRetunrd, setIsMarksRFetuned] = useState(false);
  const [marks, setMarks] = useState([]);
  const [isMarksEmpty, setIsMarksEmpty] = useState(false);
  const [isDeletedClicked, setIsDeleteClicked] = useState(false);

  // Get the marks from API
  const getMarks = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/mark/getAllMarks",
        {
          projectId: projectId,
          userEmail: email,
        }
      );

      console.log(response);

      if (response.data.success) {
        setMarks((prevMarks) => [...prevMarks, ...response.data.mark]);
      }

      if (response.data.mark.length == 0) {
        setIsMarksEmpty(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMarks([]);
    if (isProjectExists) {
      getMarks();
    }
  }, [isProjectExists, projectId, isDeletedClicked]);

  return (
    <div class="w-full flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {isMarksEmpty == true ? (
        <div className="w-full flex items-center justify-center flex-col">
          <img
            className="w-80"
            src={NoProjectsSvg}
            alt="No projects available"
          />

          <p className="mt-12 text-md  text-gray-800">No Marks added Yet</p>
        </div>
      ) : (
        <div>
          {/* Marks for first sections */}
          <div>
            <h3 className="block text-lg font-bold text-gray-800">
              Project Praposal marks
            </h3>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {marks.map(
                (mark, index) =>
                  mark.assignmentId == "EE01" && (
                    <div
                      key={index}
                      class="relative flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl"
                    >
                      <div class="inline-flex justify-center items-center">
                        <span class="size-2 inline-block bg-green-500 rounded-full me-2"></span>
                        <span class="text-xs font-semibold uppercase text-gray-600">
                          {mark.assignmentId}
                        </span>
                      </div>

                      <div class="text-center">
                        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">
                          {mark.value} / 10
                        </h3>
                      </div>

                      <dl class="flex justify-center items-center divide-x divide-gray-200">
                        <dt class="pe-3">
                          <span class="block text-sm text-gray-500">
                            Student Mail
                          </span>
                        </dt>
                        <dd class="text-start ps-3">
                          <span class="block text-sm text-gray-500">
                            {mark.userEmail}
                          </span>
                        </dd>
                      </dl>
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Marks for secound sections */}
          <div className="mt-8">
            <h3 className="block text-lg font-bold text-gray-800">
              Mid Evaluvatio marks
            </h3>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {marks.map(
                (mark, index) =>
                  mark.assignmentId == "EE02" && (
                    <div
                      key={index}
                      class="relative flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl"
                    >
                      <div class="inline-flex justify-center items-center">
                        <span class="size-2 inline-block bg-green-500 rounded-full me-2"></span>
                        <span class="text-xs font-semibold uppercase text-gray-600">
                          {mark.assignmentId}
                        </span>
                      </div>

                      <div class="text-center">
                        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">
                          {mark.value} / 10
                        </h3>
                      </div>

                      <dl class="flex justify-center items-center divide-x divide-gray-200">
                        <dt class="pe-3">
                          <span class="block text-sm text-gray-500">
                            Student Mail
                          </span>
                        </dt>
                        <dd class="text-start ps-3">
                          <span class="block text-sm text-gray-500">
                            {mark.userEmail}
                          </span>
                        </dd>
                      </dl>
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Marks for third sections */}
          <div className="mt-8">
            <h3 className="block text-lg font-bold text-gray-800">
              Final Evaluvation marks
            </h3>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {marks.map(
                (mark, index) =>
                  mark.assignmentId == "EE03" && (
                    <div
                      key={index}
                      class="relative flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl"
                    >
                      <div class="inline-flex justify-center items-center">
                        <span class="size-2 inline-block bg-green-500 rounded-full me-2"></span>
                        <span class="text-xs font-semibold uppercase text-gray-600">
                          {mark.assignmentId}
                        </span>
                      </div>

                      <div class="text-center">
                        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">
                          {mark.value} / 10
                        </h3>
                      </div>

                      <dl class="flex justify-center items-center divide-x divide-gray-200">
                        <dt class="pe-3">
                          <span class="block text-sm text-gray-500">
                            Student Mail
                          </span>
                        </dt>
                        <dd class="text-start ps-3">
                          <span class="block text-sm text-gray-500">
                            {mark.userEmail}
                          </span>
                        </dd>
                      </dl>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarkSectionStudent;