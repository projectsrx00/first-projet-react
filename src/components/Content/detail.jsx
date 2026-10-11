import avatar from "../../images/avatar.svg";

function Detail() {
  return (
    <div className="card detail">
      <img src={avatar} alt="Mohamed El Bakkali" className="detail-photo" />
      <h2 className="detail-name">Mohamed El Bakkali</h2>
      <hr />
      <p><strong>Student ID:</strong> 321000001</p>
      <p><strong>Class:</strong> 4</p>
      <p><strong>Section:</strong> A</p>
    </div>
  );
}

export default Detail;
