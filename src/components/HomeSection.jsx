import { Link } from "react-router-dom";

const HomeSection = ({ item }) => {
  console.log(item);

  return (
    <div className="section-container">
      <div className="section-title">
        <div className="section-maintype">{item.mainType}</div>
        <div className="section-english">{item.mainTypeEnglish}</div>
      </div>
      <div className="section-feature">{item.feature}</div>

      <div className="section-feature-list">
        {item.pictures.map((each) => (
            <Link to={'/personality/'+each.typeLetter }>
           
          <div className="section-each-type">
            <div className="section-each-img">
              <img src={each.imageUrl} />
            </div>
            <div className="section-each-label">
              {/* <img src={`./images/${each.labelImage}`} /> */}
              <div className="section-personal">{each.typeLetter}</div>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <div className="section-line"></div>
    </div>
    
  );
};

export default HomeSection;
