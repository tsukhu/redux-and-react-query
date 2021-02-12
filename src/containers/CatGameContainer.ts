import { connect } from "react-redux";
import { gifActions } from "../stores/coreRedux/gif/actions";
import CatGame from "../components/coreRedux/CatGame";

const mapStateToProps = ({ gif }: { gif: any}) => ({
  imageUrl: gif.url,
  loading: gif.loading,
  error: gif.error
});

const mapDispatchToProps = (dispatch: any) => ({
  play: () => dispatch(gifActions.asyncFetch()),
  clear: () => dispatch(gifActions.clearGif())
});

export default connect(mapStateToProps, mapDispatchToProps)(CatGame);
