import React from "react";
import CountUp from "react-countup";
import { FaBook, FaCheckCircle, FaUserGraduate } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "./Dashboard.css";

interface CounterCardProps {
  title: string;
  endValue: number;
  icon: React.ReactNode;
  showPlus?: boolean;
}

const CounterCard: React.FC<CounterCardProps> = ({
  title,
  endValue,
  icon,
  showPlus,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="card text-center mb-4 shadow-sm">
      <div className="card-body">
        <div className="icon mb-3">{icon}</div>
        <div className="card-title mb-2">{title}</div>
        <div className="count">
          {inView && (
            <CountUp end={endValue} duration={2} prefix={showPlus ? "+" : ""} />
          )}
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <CounterCard
            title="Aulas"
            endValue={303}
            //endValue={223}
            icon={<FaBook size={50} color="#007bff" />}
            showPlus={true}
          />
        </div>
        <div className="col">
          <CounterCard
            title="Alunos"
            endValue={327}
            icon={<FaUserGraduate size={50} color="#28a745" />}
            showPlus={true}
          />
        </div>
        <div className="col">
          <CounterCard
            title="Aprovados"
            endValue={204}
            icon={<FaCheckCircle size={50} color="#ffc107" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
