const QuestionBlock = ({
  question,
  setChosenAnswerItems,
  chosenAnswerItems
}) => {
  const handleClick = () => {
    setChosenAnswerItems((prevState) => [...prevState, question.text]);
  };

  return (
    <button
      className='question-block'
      onClick={handleClick}
      disabled={!chosenAnswerItems.includes(question.text)}
    >
      <img src={question.image} alt={question.alt} />
      <h3>{question.text}</h3>
      <p>
        <a href={question.image}>{question.credit} </a>
        <a href='https://www.unsplash.com'>Unsplash</a>
      </p>
    </button>
  );
};

export default QuestionBlock;
