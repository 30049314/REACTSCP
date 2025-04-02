import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import scpData from "../data/scpdata.json";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";


function SCPContent() {
  const { scpId } = useParams(); 
  const scp = scpData.find((item) => item.item === scpId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [scpId] );

  if (!scp) {
    return (
      <div className="content">
        <NavMenu />
        <div className="page">
          <h1>SCP not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="content">
      <NavMenu />
      <div className="page">
        <h1>{scp.item}: {scp.name}</h1>
        <h3>Object Class: {scp.objectClass}</h3>
        <p>
          <strong>Description:</strong>
          <br />
          {scp.description.map((desc, index) => (
            <span key={index} dangerouslySetInnerHTML={{ __html: desc }} />
          ))}
        </p>
        {scp.specialContainmentProcedure && (
          <div>
            <h3>Special Containment Procedure:</h3>
            {scp.specialContainmentProcedure.map((proc, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: proc }} />
            ))}
          </div>
        )}
        {scp.image && <img src={`/images/${scp.image}`} alt={scp.name} className="img_align"/>}
        {scp.addendum && (
          <div>
            <h3>Addendums:</h3>
            {scp.addendum.map((add, index) => (
              <div key={index}>
                <h4>{add.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: add.content }} />
              </div>
            ))}
          </div>
        )}
        {scp.reference && (
          <div>
            <h3>References:</h3>
            {scp.reference.map((ref, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: ref }} />
            ))}
          </div>
        )}
        {scp.chronologicalHistory && (
          <div>
            <h3>Chronological History:</h3>
            {scp.chronologicalHistory.map((history, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: history }} />
            ))}
          </div>
        )}
        {scp.spaceTimeAnomalies && (
          <div>
            <h3>Space-Time Anomalies:</h3>
            {scp.spaceTimeAnomalies.map((anomaly, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: anomaly }} />
            ))}
          </div>
        )}
        {scp.additionalNotes && (
          <div>
            <h3>Additional Notes:</h3>
            {scp.additionalNotes.map((note, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: note }} />
            ))}
          </div>
        )}
        {scp.appendix && (
          <div>
            <h3>Appendix:</h3>
            {scp.appendix.map((append, index) => (
              <div key={index}>
                <h4>{append.title}</h4>
                {Array.isArray(append.content) ? (
                  append.content.map((line, lineIndex) => (
                    <p key={lineIndex} dangerouslySetInnerHTML={{ __html: line }} />
                  ))
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: append.content }} />
                )}
              </div>
            ))}
          </div>
        )}
      <Footer />
      </div>
      <Link to="/" className="folder-link"><strong>CLOSE</strong></Link>
    </div>
  );
}

export default SCPContent;
