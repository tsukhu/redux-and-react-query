import { connect } from "react-redux";
import { gifActions } from "../actions";
import VendingMachine from "../components/VendingMachine";

const mapStateToProps = state => ({
  imageUrl: state.gif.url,
  loading: state.gif.loading,
  error: state.gif.error
});

const mapDispatchToProps = dispatch => ({
  play: () => dispatch(gifActions.asyncFetch()),
  clear: () => dispatch(gifActions.clearGif())
});

export default connect(mapStateToProps, mapDispatchToProps)(VendingMachine);
