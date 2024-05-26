import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import './CounterCard.styles.scss';

interface CounterCardProps {
  title: string;
  endValue: number;
  icon: React.ReactNode;
  showPlus?: boolean;
}

export function CounterCard({
  title,
  endValue,
  icon,
  showPlus,
}: CounterCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5, 
  });

  return (
    <div ref={ref} className="counter-card">
      <div className="counter-card-body">
        <div className="counter-card">{icon}</div>
        <div className="counter-card-title mb-2">{title}</div>
        <div className="counter-card-count">
          {inView && (
            <CountUp end={endValue} duration={2} prefix={showPlus ? "+" : ""} />
          )}
        </div>
      </div>
    </div>
  );
}
