import { connect } from "react-redux";
import {
  createTodoActionCreator,
  deleteTodoActionCreator,
  editTodoActionCreator,
  toggleTodoActionCreator,
  selectTodoActionCreator,
} from "../../stores/coreRedux/todo/actions";
import TodoList from "../../components/coreRedux/TodoList";

const mapStateToProps = ({ todos, selectedTodoId, counter }: any) => ({
  todos,
  selectedTodoId,
  counter,
});

const mapDispatchToProps = (dispatch: any) => ({
  createTodo: (todo: { desc: string }) =>
    dispatch(createTodoActionCreator(todo)),
  deleteTodo: (todo: { id: string }) => dispatch(deleteTodoActionCreator(todo)),
  editTodo: (todo: { id: string; desc: string }) =>
    dispatch(editTodoActionCreator(todo)),
  toggleTodo: (todo: { id: string; isComplete: boolean }) =>
    dispatch(toggleTodoActionCreator(todo)),
  selectTodo: (todo: { id: string }) => dispatch(selectTodoActionCreator(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
