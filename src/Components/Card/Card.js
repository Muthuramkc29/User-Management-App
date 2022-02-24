import React from "react";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { setUpdateId } from "../../redux/reducers/userReducers";
import userIcon from "../../images/profile-builder.png";

function Card({ handleDelete, handleUpdate, setModalOpen }) {
  const users = useSelector((state) => state.user.users);
  const deleteLoading = useSelector((state) => state.user.deleteLoading);
  const dispatch = useDispatch();

  return (
    <div>
      {users.length === 0 ? (
        <div className="mt-10 text-center">Currently, No users added!</div>
      ) : (
        <div className="flex justify-center items-center mt-5">
          <div className="flex flex-wrap justify-center items-center px-16">
            {users.map((user) => (
              <div key={user.id}>
                <div className="w-68 m-5">
                  <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                    <img
                      className="w-24 h-24 rounded-full border-4 border-green-600 mx-auto"
                      src={userIcon}
                      alt=""
                      width="384"
                      height="512"
                    />
                    <div className="pt-6 text-center text-xl space-y-4">
                      {/* <blockquote>
                <p className="text-lg font-medium">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. Its easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote> */}
                      <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                          {user.name}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                          {user.email}
                        </div>
                      </figcaption>
                    </div>
                    <div className="flex justify-center gap-3 mt-5">
                      <Button
                        label="Update"
                        icon="pi pi-check"
                        className="p-button-raised p-button-success p-button-sm"
                        onClick={() => {
                          setModalOpen(true);
                          handleUpdate(user.id, user.name, user.email);
                          dispatch(setUpdateId(user.id));
                        }}
                      />
                      <Button
                        label="Delete"
                        icon="pi pi-minus-circle"
                        loading={deleteLoading ? true : false}
                        className="p-button-raised p-button-danger p-button-sm"
                        onClick={() => {
                          handleDelete(user.id, user.name, user.email);
                        }}
                      />
                    </div>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
