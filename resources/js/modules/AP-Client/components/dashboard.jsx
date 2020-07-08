import React from "react";

function Dashboard() {
    return (
        <div>
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
                <div className="m-subheader ">
                    <div className="d-flex align-items-center">
                        <div className="mr-auto">
                            <h3
                                className="m-subheader__title "
                                style={{ color: "#111111" }}
                            >
                                Dashboard
                            </h3>
                        </div>
                        <div>
                            <span
                                className="m-subheader__daterange"
                                id="m_dashboard_daterangepicker"
                            >
                                <span className="m-subheader__daterange-label">
                                    <span className="m-subheader__daterange-title"></span>
                                    <span className="m-subheader__daterange-date m--font-brand"></span>
                                </span>
                                <a
                                    href="#"
                                    className="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill"
                                >
                                    <i className="la la-angle-down"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="m-content">
                    <div className="d-flex justify-content-around">
                        <div
                            className="m-alert m-alert--icon m-alert--air m-alert--square alert alert-dismissible fade show "
                            role="alert"
                            style={{
                                width: "100%",
                                height: "106px",
                                marginRight: "20px"
                            }}
                        >
                            <div className="m-alert__icon">
                                <i className="la la-warning"></i>
                            </div>
                            <div className="m-alert__text">
                                <strong>
                                    <span
                                        className="m-lert__text"
                                        style={{ color: "brown" }}
                                    >
                                        223
                                    </span>{" "}
                                </strong>
                                <br />
                                <p style={{ fontFamily: "tahoma" }}>
                                    Chờ tiếp nhận
                                </p>
                            </div>
                            <div className="m-alert__close"></div>
                        </div>
                        <div
                            className="m-alert m-alert--icon m-alert--air m-alert--square alert alert-dismissible fade show"
                            role="alert"
                            style={{
                                width: "100%",
                                height: "106px",
                                marginRight: "20px"
                            }}
                        >
                            <div className="m-alert__icon">
                                <i className="la la-warning"></i>
                            </div>
                            <div className="m-alert__text">
                                <strong>
                                    <span
                                        className="m-lert__text"
                                        style={{ color: "red" }}
                                    >
                                        223
                                    </span>{" "}
                                </strong>
                                <br />
                                <p style={{ fontFamily: "tahoma" }}>
                                    Đang xử lý
                                </p>
                            </div>
                            <div className="m-alert__close"></div>
                        </div>
                        <div
                            className="m-alert m-alert--icon m-alert--air m-alert--square alert alert-dismissible fade show"
                            role="alert"
                            style={{
                                width: "100%",
                                height: "106px",
                                marginRight: "20px"
                            }}
                        >
                            <div className="m-alert__icon">
                                <i className="la la-warning"></i>
                            </div>
                            <div className="m-alert__text">
                                <strong>
                                    <span
                                        className="m-lert__text"
                                        style={{ color: "blue" }}
                                    >
                                        223
                                    </span>{" "}
                                </strong>
                                <br />
                                <p style={{ fontFamily: "tahoma" }}>
                                    Chờ xác nhận hoàn thành
                                </p>
                            </div>
                            <div className="m-alert__close"></div>
                        </div>
                        <div
                            className="m-alert m-alert--icon m-alert--air m-alert--square alert alert-dismissible fade show"
                            role="alert"
                            style={{
                                width: "100%",
                                height: "106px",
                                marginRight: "20px"
                            }}>
                            <div className="m-alert__icon">
                                <i className="la la-warning"></i>
                            </div>
                            <div className="m-alert__text">
                                <strong>
                                    <span
                                        className="m-lert__text"
                                        style={{ color: "pink" }}>
                                        223
                                    </span>
                                </strong>
                                <br />
                                <p style={{ fontFamily: "tahoma" }}>Trễ hạn</p>
                            </div>
                            <div className="m-alert__close"></div>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div
                        className="m-portlet m-portlet--full-height"
                        style={{ marginRight: "30px" }}
                    >
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <h3 className="m-portlet__head-text">
                                        Recent Notifications
                                    </h3>
                                </div>
                            </div>
                            <div className="m-portlet__head-tools">
                                <ul
                                    className="nav nav-pills nav-pills--brand m-nav-pills--align-right m-nav-pills--btn-pill m-nav-pills--btn-sm"
                                    role="tablist"
                                >
                                    <li className="nav-item m-tabs__item">
                                        <a
                                            className="nav-link m-tabs__link active"
                                            data-toggle="tab"
                                            href="#m_widget2_tab1_content"
                                            role="tab"
                                        >
                                            Today
                                        </a>
                                    </li>
                                    <li className="nav-item m-tabs__item">
                                        <a
                                            className="nav-link m-tabs__link"
                                            data-toggle="tab"
                                            href="#m_widget2_tab2_content"
                                            role="tab"
                                        >
                                            Month
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="m-portlet__body">
                            <div className="tab-content">
                                <div
                                    className="tab-pane active"
                                    id="m_widget2_tab1_content"
                                >
                                    <div className="m-timeline-3">
                                        <div className="m-timeline-3__items">
                                            <div className="m-timeline-3__item m-timeline-3__item--info">
                                                <span className="m-timeline-3__item-time">
                                                    09:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        Lorem ipsum dolor sit
                                                        amit,consectetur eiusmdd
                                                        tempor
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link"
                                                        >
                                                            By Bob
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="m-timeline-3__item m-timeline-3__item--warning">
                                                <span className="m-timeline-3__item-time">
                                                    10:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        Lorem ipsum dolor sit
                                                        amit
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link"
                                                        >
                                                            By Sean
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="m-timeline-3__item m-timeline-3__item--brand">
                                                <span className="m-timeline-3__item-time">
                                                    11:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        Lorem ipsum dolor sit
                                                        amit eiusmdd tempor
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link"
                                                        >
                                                            By James
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="m-timeline-3__item m-timeline-3__item--success">
                                                <span className="m-timeline-3__item-time">
                                                    12:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        Lorem ipsum dolor
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link"
                                                        >
                                                            By James
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="m-timeline-3__item m-timeline-3__item--danger">
                                                <span className="m-timeline-3__item-time">
                                                    14:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        Lorem ipsum dolor sit
                                                        amit,consectetur eiusmdd
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link"
                                                        >
                                                            By Derrick
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="m-timeline-3__item m-timeline-3__item--info">
                                                <span className="m-timeline-3__item-time">
                                                    15:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        Lorem ipsum dolor sit
                                                        amit,consectetur
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link"
                                                        >
                                                            By Iman
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="m-timeline-3__item m-timeline-3__item--brand">
                                                <span className="m-timeline-3__item-time">
                                                    17:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        Lorem ipsum dolor sit
                                                        consectetur eiusmdd
                                                        tempor
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link">
                                                            By Aziko
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane"
                                    id="m_widget2_tab2_content"
                                >
                                    <div className="m-timeline-3">
                                        <div className="m-timeline-3__items">
                                            <div className="m-timeline-3__item m-timeline-3__item--info">
                                                <span className="m-timeline-3__item-time m--font-focus">
                                                    09:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        Contrary to popular
                                                        belief, Lorem Ipsum is
                                                        not simply random text.
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link"
                                                        >
                                                            By Bob
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="m-timeline-3__item m-timeline-3__item--warning">
                                                <span className="m-timeline-3__item-time m--font-warning">
                                                    10:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        There are many
                                                        variations of passages
                                                        of Lorem Ipsum
                                                        available.
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link"
                                                        >
                                                            By Sean
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="m-timeline-3__item m-timeline-3__item--brand">
                                                <span className="m-timeline-3__item-time m--font-primary">
                                                    11:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        Contrary to popular
                                                        belief, Lorem Ipsum is
                                                        not simply random text.
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link"
                                                        >
                                                            By James
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="m-timeline-3__item m-timeline-3__item--success">
                                                <span className="m-timeline-3__item-time m--font-success">
                                                    12:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        The standard chunk of
                                                        Lorem Ipsum used since
                                                        the 1500s is reproduced.
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link"
                                                        >
                                                            By James
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="m-timeline-3__item m-timeline-3__item--danger">
                                                <span className="m-timeline-3__item-time m--font-warning">
                                                    14:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        Latin words, combined
                                                        with a handful of model
                                                        sentence structures.
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link"
                                                        >
                                                            By Derrick
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="m-timeline-3__item m-timeline-3__item--info">
                                                <span className="m-timeline-3__item-time m--font-info">
                                                    15:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        Contrary to popular
                                                        belief, Lorem Ipsum is
                                                        not simply random text.
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link"
                                                        >
                                                            By Iman
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="m-timeline-3__item m-timeline-3__item--brand">
                                                <span className="m-timeline-3__item-time m--font-danger">
                                                    17:00
                                                </span>
                                                <div className="m-timeline-3__item-desc">
                                                    <span className="m-timeline-3__item-text">
                                                        Lorem Ipsum is therefore
                                                        always free from
                                                        repetition, injected
                                                        humour.
                                                    </span>
                                                    <br />
                                                    <span className="m-timeline-3__item-user-name">
                                                        <a
                                                            href="#"
                                                            className="m-link m-link--metal m-timeline-3__item-link">
                                                            By Aziko
                                                        </a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-portlet">
                        <div className="m-portlet__head">
                            <div className="m-portlet__head-caption">
                                <div className="m-portlet__head-title">
                                    <h3 className="m-portlet__head-text">
                                        Table Head States
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="m-portlet__body">
                            <div className="m-section">
                                <div className="m-section__content">
                                    <table className="table m-table m-table--head-bg-success">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Jhon</td>
                                                <td>Stone</td>
                                                <td>@jhon</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Lisa</td>
                                                <td>Nilson</td>
                                                <td>@lisa</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="m-portlet"
                        style={{
                            marginLeft: "30px",
                            width: "300px",
                            paddingLeft: "30px"
                        }}
                    >
                        <div className="m-portlet__body  m-portlet__body--no-padding">
                            <div className="row m-row--no-padding m-row--col-separator-xl">
                                <div className="m-widget14">
                                    <div className="m-widget14__header">
                                        <h3 className="m-widget14__title">
                                            Thống kê
                                        </h3>
                                        <span className="m-widget14__desc">
                                            Tổng số ticket đang có
                                        </span>
                                    </div>
                                    <div className="row  align-items-center">
                                        <div className="col">
                                            <div
                                                id="m_chart_profit_share"
                                                className="m-widget14__chart"
                                                style={{ height: "160px" }}
                                            >
                                                <div
                                                    className="m-widget14__stat"
                                                    style={{
                                                        color:
                                                            "rgb(113, 106, 202)"
                                                    }}
                                                >
                                                    100
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="m-widget14__legends">
                                                <div className="m-widget14__legend">
                                                    <span className="m-widget14__legend-bullet m--bg-accent"></span>
                                                    <span className="m-widget14__legend-text">
                                                        37 đã hoàn tất
                                                    </span>
                                                </div>
                                                <div className="m-widget14__legend">
                                                    <span className="m-widget14__legend-bullet m--bg-warning"></span>
                                                    <span className="m-widget14__legend-text">
                                                        20 đang xử lý
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
