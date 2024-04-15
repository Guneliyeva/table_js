const rowButton = document.querySelector(".btn");
const tbody = document.querySelector("#tableBody");

rowButton.addEventListener("click", () => {
  const row = document.createElement("tr");

  const idTd = document.createElement("td");
  idTd.textContent = tbody.children.length + 1;

  const nameTd = document.createElement("td");
  const surnameTd = document.createElement("td");
  const ageTd = document.createElement("td");
  const buttonTd = document.createElement("td");

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Ad...");
  nameTd.append(nameInput);

  const surnameInput = document.createElement("input");
  surnameInput.setAttribute("type", "text");
  surnameInput.setAttribute("placeholder", "Soyad...");
  surnameTd.append(surnameInput);

  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageInput.setAttribute("placeholder", "Yaş...");
  ageTd.append(ageInput);

  const saveButton = document.createElement("button");
  saveButton.classList.add("saveBtn");
  saveButton.textContent = "Yadda saxla";

  saveButton.addEventListener("click", () => {
    nameTd.textContent = nameInput.value;
    surnameTd.textContent = surnameInput.value;
    ageTd.textContent = ageInput.value;

    saveButton.remove();
    const editButton = document.createElement("button");
    editButton.classList.add("editBtn");
    editButton.textContent = "Düzəliş et";

    editButton.addEventListener("click", () => {
      nameTd.innerHTML = "";
      surnameTd.innerHTML = "";
      ageTd.innerHTML = "";
      nameTd.append(nameInput);
      surnameTd.append(surnameInput);
      ageTd.append(ageInput);

      editButton.replaceWith(saveButton);
    });

    buttonTd.append(editButton);
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteBtn");
  deleteButton.textContent = "Ləğv et";
  deleteButton.addEventListener("click", () => {
    row.remove();
    Array.from(tbody.querySelectorAll("tr")).forEach((row, index) => {
      row.children[0].textContent = index + 1;
    });
  });

  buttonTd.append(saveButton, deleteButton);

  row.append(idTd, nameTd, surnameTd, ageTd, buttonTd);
  tbody.append(row);
});
