import { useParams, useNavigate } from "react-router-dom";

export default function DeleteStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const arr = JSON.parse(localStorage.getItem("students") || "[]");

  localStorage.setItem(
    "students",
    JSON.stringify(arr.filter((s) => s.id !== Number(id))),
  );

  navigate("/students");

  return null;
}
