import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../Hooks/use-http";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: "https://react-http-1fd45-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      (data) => {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };

        props.onAddTask(createdTask);
      }
    );
    // const response = await fetch(
    //   "https://react-http-1fd45-default-rtdb.firebaseio.com/tasks.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({ text: taskText }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
