import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { NewUsers } from "../../pages";
import { ApplicationState } from "../../store";
import { RepositoriesActions } from "../../store/ducks/repositories/actions";

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NewUsers);
