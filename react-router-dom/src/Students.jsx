import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Students() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [arr, setArr] = useState(() =>
    JSON.parse(localStorage.getItem("students") || "[]"),
  );

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [editId, setEditId] = useState(null);

  const [obj, setObj] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const save = (data) => {
    setArr(data);
    localStorage.setItem("students", JSON.stringify(data));
  };


  // Update
  const updateStudent = (s) => {
    save(arr.map((x) => (x.id === s.id ? { ...x, ...obj } : x)));
    setEditId(null);
  };

  // Search
  const filtered = arr.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Pagination: 5 records per page
  const visible = filtered.slice((page - 1) * 5, page * 5);

  return (
    <>
      <h2>Students</h2>

      <input
        placeholder="Search by name"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      {visible.map((s) => (
        <div key={s.id}>
          {editId === s.id ? (
            <>
              <input
                value={obj.name}
                onChange={(e) => setObj({ ...obj, name: e.target.value })}
              />
              <button onClick={() => updateStudent(s)}>Save</button>
            </>
          ) : (
            <>
              {s.name} - {s.email} - {s.id}
              <button
                onClick={() => {
                  setEditId(s.id);
                  setObj(s);
                }}
              >
                Edit
              </button>
              <button onClick={() => navigate(`/delete/${s.id}`)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>

      <button
        disabled={page * 5 >= filtered.length}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
}
