import React from "react";

class Users extends React.Component {
  state = {
    users: null,
  };

  constructor(props) {
    super(props);
    this.state = { users: null };
  }

  componentDidMount() {
    fetch(
      "https://gorest.co.in/public-api/users?_format=json&access-token=y0Qi1dlYOfjoOzynRYAnUpem0ZAj-iZ-9Jp8"
    )
      .then((response) => response.json())
      .then((res) => {
        this.setState({ users: res.result });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    console.log("I was triggered during render");
    return (
      <section className="page-section" id="users">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Users</h2>
              <div className="col-sm-12 text-left">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Phone Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users &&
                      this.state.users.map(
                        ({ first_name, last_name, phone }, index) => (
                          <tr>
                            <td>{first_name}</td>
                            <td>{last_name}</td>
                            <td>{phone}</td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Users;
