type PatientDatailItemProps = {
  label: string;
  info: string;
};

const PatientDetailItem = ({ label, info }: PatientDatailItemProps) => {
  return (
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      {`${label}: `}
      <span className='font-normal normal-case'>{info}</span>
    </p>
  );
};

export default PatientDetailItem;
