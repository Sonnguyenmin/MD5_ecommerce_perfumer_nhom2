import './dashboard.scss';

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-content">
        <div className="overview">
          <div className="box box1">
            <i className="uil uil-users-alt"></i>
            <span className="dashboard-number">2000</span>
            <span className="dashboard-text">Người dùng</span>
          </div>
          <div className="box box2">
            <i className="uil uil-taxi"></i>
            <span className="dashboard-number">2000</span>
            <span className="dashboard-text">Sản phẩm</span>
          </div>
          <div className="box box3">
            <i className="uil uil-comment-alt-chart-lines"></i>
            <span className="dashboard-number">2000</span>
            <span className="dashboard-text">Bình luận</span>
          </div>
          <div className="box box4">
            <i className="uil uil-comment-alt-chart-lines"></i>
            <span className="dashboard-number">2000</span>
            <span className="dashboard-text">Bình luận</span>
          </div>
        </div>

        <div className="table-container">
          <h2>Danh sách Người Dùng</h2>
          <table className="responsive-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Ngày tham gia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Nguyễn Văn A</td>
                <td>a@example.com</td>
                <td>01/01/2024</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Trần Thị B</td>
                <td>b@example.com</td>
                <td>02/01/2024</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-container">
          <h2>Danh sách Sản Phẩm</h2>
          <table className="responsive-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sản phẩm A</td>
                <td>100.000 VNĐ</td>
                <td>Còn hàng</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sản phẩm B</td>
                <td>200.000 VNĐ</td>
                <td>Hết hàng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
