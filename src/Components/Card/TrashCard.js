import { Button } from "primereact/button";
import React from "react";
import { useSelector } from "react-redux";
// import { ConfirmDialog } from "primereact/confirmdialog"; // To use <ConfirmDialog> tag
import { confirmDialog } from "primereact/confirmdialog"; // To use confirmDialog method
import userIcon from "../../images/profile-builder.png";

function TrashCard({ handleTrashUserDelete, handleRestore }) {
  const trashUsers = useSelector((state) => state.user.trashUsers);
  const restoreLoading = useSelector((state) => state.user.restoreLoading);
  const deleteLoading = useSelector((state) => state.user.deleteLoading);

  return (
    <div>
      {trashUsers.length === 0 ? (
        <div className="flex justify-center mt-10">
          <div>Currently, No users added!</div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-5">
          <div className="flex flex-wrap justify-center items-center px-16">
            {trashUsers.map((user) => (
              <div className="w-68 m-5">
                <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                  <img
                    className="w-24 h-24 rounded-full border-4 border-green-600 mx-auto"
                    src={userIcon}
                    alt=""
                    width="384"
                    height="512"
                  />
                  <div class="pt-6 text-center text-xl space-y-4">
                    {/* <blockquote>
                <p class="text-lg font-medium">
                  “Tailwind CSS is the only framework that I've seen scale on
                  large teams. Its easy to customize, adapts to any design, and
                  the build size is tiny.”
                </p>
              </blockquote> */}
                    <figcaption class="font-medium">
                      <div class="text-sky-500 dark:text-sky-400">
                        {user.name}
                      </div>
                      <div class="text-slate-700 dark:text-slate-500">
                        {user.email}
                      </div>
                    </figcaption>
                  </div>
                  <div className="flex justify-center gap-3 mt-5">
                    <Button
                      label="Restore"
                      icon="pi pi-check"
                      className="p-button-raised p-button-success p-button-sm"
                      loading={restoreLoading ? true : false}
                      onClick={() => {
                        handleRestore(user);
                      }}
                    />
                    <Button
                      label="Delete"
                      icon="pi pi-minus-circle"
                      className="p-button-raised p-button-danger p-button-sm"
                      loading={deleteLoading ? true : false}
                      // onClick={() => handleTrashUserDelete(user.id)}
                      onClick={() => {
                        confirmDialog({
                          message:
                            "Are you sure you want to delete user permanently?",
                          header: "Delete user permanently?",
                          icon: "pi pi-trash",
                          acceptClassName: "p-button-danger",
                          breakpoints: { "960px": "75vw", "640px": "85vw" },
                          style: { width: "40vw" },
                          accept: () => handleTrashUserDelete(user.id),
                          // reject: () => rejectFunc(),
                        });
                      }}
                    />
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TrashCard;
