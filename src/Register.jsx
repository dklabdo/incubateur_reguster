import React, { useState, useRef, useEffect } from "react";
import img from "./assets/k-linker_logo.svg";
import cancel from "./assets/close.svg";
import axios from "axios";
import Swal from "sweetalert2";
import bg from "./assets/startup.png";
function Register() {
  const s1 = useRef();
  const s2 = useRef();
  const s3 = useRef();
  const s4 = useRef();
  const s5 = useRef();
  const s6 = useRef();
  const s7 = useRef();
  const s8 = useRef();
  const s9 = useRef();
  const s10 = useRef();
  const s11 = useRef();
  const s12 = useRef();
  const s13 = useRef();
  const s14 = useRef();
  const s15 = useRef();
  const [formData, setFormData] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    idnumber: "",
    grade: "",
    Skills: [],
    desc: "",
  });
  const [skils, setskils] = useState([]);
  const HandleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [Succes, setSuccesfull] = useState(false);
  function Succesfull() {
    setSuccesfull(true);
  }
  function Valide() {}

  const HandleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    formData.Skills = skils;

    await axios
      .post("https://versionallami.onrender.com/12/register", formData)
      .then(() => {
        Succesfull();
      })
      .catch((err) => console.error(err));
  };
  function AddSkils(e, val) {
    e.preventDefault();
    console.log(val);
    e.target.classList.add("active");
    if (!skils.includes(val)) {
      const newSkil = [...skils, val];
      console.log(newSkil);
      setskils(newSkil);
    }
  }
  
  function HandeleRemove(eleme, rm) {
    eleme.current.classList.remove("active");
    const removeSkils = skils.filter((el) => el !== rm);
    setskils(removeSkils);
  }

  return (
    <div className="">
      <img
        loading="lazy"
        className="-z-20 h-screen object-cover w-full fixed bgimg3"
        src={bg}
        alt="..."
      />

      <div className="container mx-auto px-10 md:p-24 flex justify-center  flex-col">
        <img
          
          src={img}
          className="w-32 z-10 cursor-pointer self-center my-10"
        />
        <form onSubmit={(e) => HandleSubmit(e)} className=" flex flex-col">
          <label className="z-10">Name</label>
          <div className="w-full flex flex-col  gap-4">
            <input
              onChange={HandleChange}
              id="name"
              name="fullname"
              className="w-full input"
              type="text"
              placeholder="your name"
              required
            />
          </div>
          <label onChange={HandleChange}>Information</label>
          <input
            onChange={HandleChange}
            name="phonenumber"
            id="info"
            className="input"
            type="text"
            placeholder="Phone number"
            required
          />
          <input
            onChange={HandleChange}
            name="email"
            type="email"
            placeholder="e-mail"
            required
            className="input"
          />
          <input
            onChange={HandleChange}
            name="idnumber"
            type="text"
            placeholder="student card number"
            required
            className="input"
          />
          <label>Grade</label>
          <select name="grade" onChange={HandleChange} id="grade">
            <option value="ing1">ing 1</option>
            <option value="ing2">ing 2</option>
            <option value="l1">L1</option>
            <option value="l2">L2</option>
            <option value="l3">L3</option>
            <option value="m1">M1</option>
            <option value="m2">M2</option>
          </select>
          <label onChange={HandleChange}>Skils</label>
          <div className="flex flex-wrap">
            <button
              className="skil"
              ref={s1}
              onClick={(e) => {
                AddSkils(e, 1);
              }}
            >
              <span className="bg-transparent">
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s1, 1)}
                  src={cancel}
                />
              </span>{" "}
              front-end web developer
            </button>
            <button className="skil" ref={s2} onClick={(e) => AddSkils(e, 2)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s2, 2)}
                  src={cancel}
                />
              </span>{" "}
              back-end web developer
            </button>
            <button className="skil" ref={s3} onClick={(e) => AddSkils(e, 3)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s3, 3)}
                  src={cancel}
                />
              </span>{" "}
              full stack web developer
            </button>
            <button className="skil" ref={s4} onClick={(e) => AddSkils(e, 4)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s4, 4)}
                  src={cancel}
                />
              </span>{" "}
              Mobile developer
            </button>
            <button className="skil" ref={s5} onClick={(e) => AddSkils(e, 5)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s5, 5)}
                  src={cancel}
                />
              </span>{" "}
              DevOps
            </button>
            <button className="skil" ref={s6} onClick={(e) => AddSkils(e, 6)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s6, 6)}
                  src={cancel}
                />
              </span>{" "}
              Ui/UX
            </button>
            <button className="skil" ref={s7} onClick={(e) => AddSkils(e, 7)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s7, 7)}
                  src={cancel}
                />
              </span>{" "}
              Graphic designer
            </button>
            <button className="skil" ref={s8} onClick={(e) => AddSkils(e, 8)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s8, 8)}
                  src={cancel}
                />
              </span>{" "}
              3D modeler
            </button>
            <button className="skil" ref={s9} onClick={(e) => AddSkils(e, 9)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s9, 9)}
                  src={cancel}
                />
              </span>{" "}
              Desktop app dev (.NET){" "}
            </button>
            <button className="skil" ref={s10} onClick={(e) => AddSkils(e, 10)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s10, 10)}
                  src={cancel}
                />
              </span>
              Natwork ingineer{""}
            </button>
            <button className="skil" ref={s11} onClick={(e) => AddSkils(e, 11)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s11, 11)}
                  src={cancel}
                />
              </span>
              Photographe
            </button>
            <button className="skil" ref={s12} onClick={(e) => AddSkils(e, 12)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s12, 12)}
                  src={cancel}
                />
              </span>
              Video editer
            </button>
            <button className="skil" ref={s13} onClick={(e) => AddSkils(e, 13)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s13, 13)}
                  src={cancel}
                />
              </span>
              Game dev
            </button>
            <button className="skil" ref={s14} onClick={(e) => AddSkils(e, 14)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s14, 14)}
                  src={cancel}
                />
              </span>
              Robotic ingineer
            </button>
            <button className="skil" ref={s15} onClick={(e) => AddSkils(e, 15)}>
              <span>
                <img
                  className="w-6 bg-transparent"
                  onClick={() => HandeleRemove(s15, 15)}
                  src={cancel}
                />
              </span>
              Tech project manager
            </button>
          </div>
          <label>Talk about yourself</label>
          <textarea
            onChange={HandleChange}
            name="desc"
            placeholder="talk about youself in 100 word"
            className=""
            required
          />
          <button
            className="px-4 z-10 py-2 text-black text-lg my-10 w-fit mx-auto rounded-full bg-main"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
      {Succes && <Alert />}
    </div>
  );
}

const Alert = () => {
  Swal.fire({
    icon: "success",
    title: "Registration Succesfull",
    showConfirmButton: false,
    timer: 4000,
  }).then((result) => {
    location.replace('https://k-linker.club')
  });
};

export default Register;
