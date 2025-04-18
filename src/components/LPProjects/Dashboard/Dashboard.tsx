import { FaBook  } from "@react-icons/all-files/fa/FaBook";
import { FaCheckCircle } from "@react-icons/all-files/fa/FaCheckCircle";
import { FaUserGraduate  } from "@react-icons/all-files/fa/FaUserGraduate";
import "./Dashboard.styles.scss";
import { CounterCard } from "./components";

export function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard-container">
        <CounterCard
          title="Aulas"
          //endValue={223}
          endValue={384}
          icon={<FaBook size={50} color="#007bff" />}
          showPlus={true}
        />

        <CounterCard
          title="Alunos"
          endValue={523}
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
