import PageHeader from "../components/PageHeader";
import Helpline from "../components/Helpline";
import { helplines } from "../data/data";

function Helplines() {
  return (
    <main className="page">

      <PageHeader
        title="Emergency Helplines"
        description="Important numbers for emergency and support services."
      />

      <div className="helpline-grid">

        {helplines.map((item, index) => (
          <Helpline
            key={index}
            icon={item.icon}
            name={item.name}
            number={item.number}
            description={item.description}
          />
        ))}

      </div>

    </main>
  );
}

export default Helplines;