import FeatureItem from "./FeatureItem.jsx";

export default function Features() {
  return (
    <section className="section home-feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {/* ***** Features Small Item Start ***** */}
              <FeatureItem
                title="Modern Strategy"
                content="Customize anything in this template to fit your website needs"
              />
              {/* ***** Features Small Item End ***** */}

              {/* ***** Features Small Item Start ***** */}
              <FeatureItem
                title="Best Relationship"
                content="Contact us immediately if you have a question in mind"
              />
              {/* ***** Features Small Item End ***** */}

              {/* ***** Features Small Item Start ***** */}
              <FeatureItem
                title="Ultimate Marketing"
                content="You just need to tell your friends about our free templates"
              />
              {/* ***** Features Small Item End ***** */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
