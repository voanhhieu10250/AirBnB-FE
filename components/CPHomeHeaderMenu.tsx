import { useState } from "react";
import * as s from "../styles/Pages/home.styles";

function CPHomeHeaderMenu() {
  const [onfocus, setOnFocus] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <s.UserInfoDropdown>
      <div>
        <button
          onClick={() => setOnFocus(!onfocus)}
          onBlur={() => setOnFocus(false)}
        >
          <s.BurgerIcon>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <g fill="none" fillRule="nonzero">
                <path d="m2 16h28"></path>
                <path d="m2 24h28"></path>
                <path d="m2 8h28"></path>
              </g>
            </svg>
          </s.BurgerIcon>
          <s.UserAvatar>
            {/* Đổi lại thành thẻ img khi đăng nhập */}
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
            </svg>
          </s.UserAvatar>
        </button>

        {onfocus && (
          <s.HeaderProfileMenu>
            {!login ? (
              <div>
                <s.ProfileMenuOpts className="bold">
                  <div>Đăng nhập</div>
                </s.ProfileMenuOpts>
                <s.ProfileMenuOpts>
                  <div>Đăng ký</div>
                </s.ProfileMenuOpts>
                <s.ProfileMenuLineBreak />
                <s.ProfileMenuOpts>
                  <div>Cho thuê nhà</div>
                </s.ProfileMenuOpts>
                <s.ProfileMenuOpts>
                  <div>Tổ chức trải nghiệm</div>
                </s.ProfileMenuOpts>
                <s.ProfileMenuOpts>
                  <div>Trợ giúp</div>
                </s.ProfileMenuOpts>
              </div>
            ) : (
              <div>
                <s.ProfileMenuOpts className="bold">
                  <div>Tin nhắn</div>
                </s.ProfileMenuOpts>
                <s.ProfileMenuOpts className="bold">
                  <div>Thông báo</div>
                </s.ProfileMenuOpts>
                <s.ProfileMenuOpts className="bold">
                  <div>Chuyến đi</div>
                </s.ProfileMenuOpts>
                <s.ProfileMenuOpts className="bold">
                  <div>Danh sách mong muốn</div>
                </s.ProfileMenuOpts>
                <s.ProfileMenuLineBreak />
                <s.ProfileMenuOpts>
                  <div>Quản lý nhà/phòng cho thuê</div>
                </s.ProfileMenuOpts>
                <s.ProfileMenuOpts>
                  <div>Tổ chức trải nghiệm</div>
                </s.ProfileMenuOpts>
                <s.ProfileMenuOpts>
                  <div>Tài khoản</div>
                </s.ProfileMenuOpts>
                <s.ProfileMenuLineBreak />
                <s.ProfileMenuOpts>
                  <div>Trợ giúp</div>
                </s.ProfileMenuOpts>
                <s.ProfileMenuOpts>
                  <div>Đăng xuất</div>
                </s.ProfileMenuOpts>
              </div>
            )}
          </s.HeaderProfileMenu>
        )}
      </div>
    </s.UserInfoDropdown>
  );
}

export default CPHomeHeaderMenu;
