import { FaBook, FaCheckCircle, FaUserGraduate } from "react-icons/fa";
import "./Dashboard.styles.scss";
import { CounterCard } from "./components";

export function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard-container">
        <CounterCard
          title="Aulas"
          //endValue={223}
          endValue={303}
          icon={<FaBook size={50} color="#007bff" />}
          showPlus={true}
        />

        <CounterCard
          title="Alunos"
          endValue={327}
          icon={<FaUserGraduate size={50} color="#28a745" />}
          showPlus={true}
        />

        <CounterCard
          title="Aprovados"
          endValue={204}
          icon={<FaCheckCircle size={50} color="#ffc107" />}
        />
      </div>
    </div>
  );
}
