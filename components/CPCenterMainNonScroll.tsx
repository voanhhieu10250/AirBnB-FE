import Link from "next/link";
import { useRef, useState } from "react";
import * as s from "../styles/Pages/home.styles";

function CPCenterMainNonScroll() {
  const [isInputDirty, setIsInputDirty] = useState(false);
  const [isPlaceFocus, setIsPlaceFocus] = useState(false);
  const [isGuestFocus, setIsGuestFocus] = useState(false);

  const [placeInput, setPlaceInput] = useState("");
  const [guestInput, setGuestInput] = useState("");
  return (
    <s.CenterMainOnScroll>
      <s.FormWrapper>
        <s.Form>
          <s.Fieldset>
            <s.Sections>
              <label htmlFor="search-block-tab-false-STAYS">
                <s.SectionsInput
                  id="search-block-tab-false-STAYS"
                  value="/home"
                  defaultChecked
                />
                <s.SectionsSpan>Nơi ở</s.SectionsSpan>
              </label>
              <label htmlFor="search-block-tab-false-EXPERIENCES">
                <s.SectionsInput
                  id="search-block-tab-false-EXPERIENCES"
                  value="/experiences"
                />
                <s.SectionsSpan>Trải nghiệm</s.SectionsSpan>
              </label>
              <s.SectionsLink>
                <Link href="/s/experiences/online">Trải nghiệm trực tuyến</Link>
              </s.SectionsLink>
            </s.Sections>
          </s.Fieldset>
          <s.FormFilter>
            <s.FilterWrapper>
              <s.FieldOne>
                <s.FieldWrapperOne>
                  <s.FieldOneLabel>
                    <s.LabelContain>
                      <s.LabelTitle>Địa điểm</s.LabelTitle>
                      <s.SearchPlaceInput
                        placeholder="Bạn sắp đi đâu?"
                        onChange={(e) => setPlaceInput(e.target.value)}
                        value={placeInput}
                        onFocus={() => setIsPlaceFocus(true)}
                        onBlur={() => setIsPlaceFocus(false)}
                      />
                    </s.LabelContain>
                  </s.FieldOneLabel>
                  {/* clear button appears when use have typed in the input field. Other that is will not appear in HTML (active: false) */}
                  <s.ClearBtn active={!!placeInput}>
                    <s.ClearBtnWrapper>
                      <s.XButton>
                        <span>
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                          >
                            <path d="m6 6 20 20"></path>
                            <path d="m26 6-20 20"></path>
                          </svg>
                        </span>
                      </s.XButton>
                    </s.ClearBtnWrapper>
                  </s.ClearBtn>
                  {/* Nếu field địa điểm được focus thì active thành true để hiện listOption */}
                  <s.SuggestOptions active={true}>
                    <s.SuggestOptionsContainer>
                      <section>
                        <div>
                          <s.ListOptions>
                            {/* Render list OptionPlace */}

                            {/* Mock option when user not type anything. Will replace all with place susgestion when user type */}
                            <s.OptionPlace>
                              <s.PlaceIcon>
                                {/* Default icon will be an img. When rendered options icons will be svg */}
                                <img
                                  src="/images/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg"
                                  alt="place icon"
                                />
                                {/* <svg
                                          viewBox="0 0 24 24"
                                          role="presentation"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="m12 13c-1.6562848 0-3-1.3434662-3-2.9994439 0-1.65708993 1.3437152-3.0005561 3-3.0005561 1.6573971 0 3 1.34346617 3 3.0005561 0 1.6559777-1.3426029 2.9994439-3 2.9994439m-.0010745-10c-3.86277368 0-6.99503645 3.09628261-6.99503645 6.91572385-.15345985 4.02308935 4.59013139 9.08416075 6.35071535 10.81932575.3584233.3532672.9312701.3532672 1.2896934 0 1.7595329-1.735165 6.5031241-6.7962364 6.3507153-10.81932575 0-3.81944124-3.1322627-6.91572385-6.9960876-6.91572385"></path>
                                        </svg> */}
                              </s.PlaceIcon>
                              <s.PlaceName>
                                <div>Khám phá các điểm đến lân cận</div>
                              </s.PlaceName>
                            </s.OptionPlace>
                            <s.PresentationPlace>
                              <span>Tìm kiếm gần đây</span>
                            </s.PresentationPlace>
                            <s.OptionPlace>
                              <s.PlaceIcon>
                                <svg
                                  viewBox="0 0 24 24"
                                  role="presentation"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="m12 13c-1.6562848 0-3-1.3434662-3-2.9994439 0-1.65708993 1.3437152-3.0005561 3-3.0005561 1.6573971 0 3 1.34346617 3 3.0005561 0 1.6559777-1.3426029 2.9994439-3 2.9994439m-.0010745-10c-3.86277368 0-6.99503645 3.09628261-6.99503645 6.91572385-.15345985 4.02308935 4.59013139 9.08416075 6.35071535 10.81932575.3584233.3532672.9312701.3532672 1.2896934 0 1.7595329-1.735165 6.5031241-6.7962364 6.3507153-10.81932575 0-3.81944124-3.1322627-6.91572385-6.9960876-6.91572385"></path>
                                </svg>
                              </s.PlaceIcon>
                              <s.PlaceName>
                                <div>District 8 - Chỗ ở</div>
                              </s.PlaceName>
                            </s.OptionPlace>
                            <s.OptionPlace>
                              <s.PlaceIcon>
                                <svg
                                  viewBox="0 0 24 24"
                                  role="presentation"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="m12 13c-1.6562848 0-3-1.3434662-3-2.9994439 0-1.65708993 1.3437152-3.0005561 3-3.0005561 1.6573971 0 3 1.34346617 3 3.0005561 0 1.6559777-1.3426029 2.9994439-3 2.9994439m-.0010745-10c-3.86277368 0-6.99503645 3.09628261-6.99503645 6.91572385-.15345985 4.02308935 4.59013139 9.08416075 6.35071535 10.81932575.3584233.3532672.9312701.3532672 1.2896934 0 1.7595329-1.735165 6.5031241-6.7962364 6.3507153-10.81932575 0-3.81944124-3.1322627-6.91572385-6.9960876-6.91572385"></path>
                                </svg>
                              </s.PlaceIcon>
                              <s.PlaceName>
                                <div>Thành Phố Hồ Chí Minh - Chổ ở</div>
                              </s.PlaceName>
                            </s.OptionPlace>
                            {/* End mock list option */}

                            {/* <s.OptionPlace>
                                      <s.PlaceIcon>
                                        <svg
                                          viewBox="0 0 24 24"
                                          role="presentation"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="m12 13c-1.6562848 0-3-1.3434662-3-2.9994439 0-1.65708993 1.3437152-3.0005561 3-3.0005561 1.6573971 0 3 1.34346617 3 3.0005561 0 1.6559777-1.3426029 2.9994439-3 2.9994439m-.0010745-10c-3.86277368 0-6.99503645 3.09628261-6.99503645 6.91572385-.15345985 4.02308935 4.59013139 9.08416075 6.35071535 10.81932575.3584233.3532672.9312701.3532672 1.2896934 0 1.7595329-1.735165 6.5031241-6.7962364 6.3507153-10.81932575 0-3.81944124-3.1322627-6.91572385-6.9960876-6.91572385"></path>
                                        </svg>
                                      </s.PlaceIcon>
                                      <s.PlaceName>
                                        <div>Thành Phố Hồ Chí Minh - Chổ ở</div>
                                      </s.PlaceName>
                                    </s.OptionPlace> */}
                          </s.ListOptions>
                        </div>
                      </section>
                    </s.SuggestOptionsContainer>
                  </s.SuggestOptions>

                  <s.FieldOneSpans>
                    Điều hướng về phía trước để truy cập kết quả được đề xuất
                  </s.FieldOneSpans>
                  <s.FieldOneSpans>1 đề xuất.</s.FieldOneSpans>
                </s.FieldWrapperOne>
              </s.FieldOne>
              <s.VerticalLine />
              <s.FieldTwo>
                <s.DateFields>
                  <s.DateFieldBtn>
                    <s.BtnContainer>
                      <s.TitleDateBtn>Nhận phòng</s.TitleDateBtn>
                      <s.SelectedDate>Thêm ngày</s.SelectedDate>
                    </s.BtnContainer>
                  </s.DateFieldBtn>
                </s.DateFields>
                <s.VerticalLine />
                <s.DateFields>
                  <s.DateFieldBtn>
                    <s.BtnContainer>
                      <s.TitleDateBtn>Trả phòng</s.TitleDateBtn>
                      <s.SelectedDate>Thêm ngày</s.SelectedDate>
                    </s.BtnContainer>
                  </s.DateFieldBtn>
                </s.DateFields>
              </s.FieldTwo>
              <s.VerticalLine />
              <s.FieldThree>
                <s.GuestFieldBtn>
                  <s.BtnContainer>
                    <s.TitleDateBtn>Khách</s.TitleDateBtn>
                    <s.SelectedDate>Thêm khách</s.SelectedDate>
                  </s.BtnContainer>
                </s.GuestFieldBtn>
                <s.SearchSubmitBtn>
                  {/* Nếu 1 trong 1 btn đc focus thì cho SubmitBtn và SearchBtnTitle active thành true */}
                  <s.SubmitBtn active={false}>
                    {/* <s.NoIdeaSpan> */}
                    <s.SubmitBtnContent>
                      <div>
                        <svg
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="presentation"
                          focusable="false"
                        >
                          <g fill="none">
                            <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                          </g>
                        </svg>
                      </div>
                      <s.SearchBtnTitle active={false}>
                        Tìm kiếm
                      </s.SearchBtnTitle>
                    </s.SubmitBtnContent>
                    {/* </s.NoIdeaSpan> */}
                  </s.SubmitBtn>
                </s.SearchSubmitBtn>
              </s.FieldThree>
            </s.FilterWrapper>
          </s.FormFilter>
        </s.Form>
      </s.FormWrapper>
    </s.CenterMainOnScroll>
  );
}

export default CPCenterMainNonScroll;
