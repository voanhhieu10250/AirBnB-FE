import styled, { css } from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  height: 100vh;
`;

export const Header = styled.header`
  height: 80px;
  left: 0px;
  top: 0;
  width: 100%;
  z-index: 100;
  position: absolute;
  color: rgb(255, 255, 255);
  ::before {
    background-image: -webkit-linear-gradient(
      to bottom,
      #000,
      rgba(0, 0, 0, 0)
    );
    background-image: -moz-linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
    background-image: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0));
    content: "";
    height: 140%;
    left: 0px;
    pointer-events: none;
    position: absolute;
    top: 0px;
    transition: 150ms opacity ease;
    width: 100%;
    z-index: 0;
    opacity: 0.4;
    transition-delay: 0px;
  }
  ::after {
    background: #ffffff;
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px;
    content: "";
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    transition: opacity 0.3s cubic-bezier(0.35, 0, 0.65, 1);
    width: 100%;
    z-index: 0;
    transform-origin: 50% 0%;
    transition-duration: 150ms;
    transition-property: opacity, -ms-transform, -webkit-transform, transform;
    transition-timing-function: ease;
    opacity: 0;
  }
`;

export const HeadContainer = styled.div`
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 1;
  justify-content: space-between;
  max-width: 1440px;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0px auto;

  ${({ theme }) => theme.breakpoints.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
  ${({ theme }) => theme.breakpoints.m} {
    padding-left: 40px;
    padding-right: 40px;
  }
  ${({ theme }) => theme.breakpoints.l} {
    padding-left: 40px;
    padding-right: 40px;
  }
  ${({ theme }) => theme.breakpoints.xl} {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const LeftHead = styled.div`
  flex: 0 0 auto;

  ${({ theme }) => theme.breakpoints.l} {
    flex: 1 0 140px;
  }
`;

export const CenterHead = styled.div`
  flex: 0 1 auto;
  min-width: 0px;
  padding: 0px 24px;
  text-align: left;

  ${({ theme }) => theme.breakpoints.l} {
    text-align: center;
  }
`;

export const RightHead = styled.div`
  flex: 1 0 auto;

  ${({ theme }) => theme.breakpoints.l} {
    flex: 1 0 140px;
  }
`;

export const LinkHome = styled.a`
  -webkit-box-align: center;
  outline: none;
  align-items: center;
  display: inline-flex;
  height: 80px;
  position: relative;
  vertical-align: middle;
  z-index: 1;
  color: rgb(255, 255, 255);

  ::before {
    border-radius: 12px;
    bottom: 8px;
    content: "";
    left: -8px;
    position: absolute;
    right: -8px;
    top: 8px;
  }
`;

export const LogoOne = styled.div`
  display: none;
  ${({ theme }) => theme.breakpoints.xl} {
    display: block;
  }
`;
export const LogoTwo = styled.div`
  ${({ theme }) => theme.breakpoints.xl} {
    display: none;
  }
`;
export const MockSearchBtn = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  transform-origin: 0% 0%;
  transform: scale(2.5, 1.375) translate(-60px, 122px);
  opacity: 0;
  transition: -ms-transform 150ms ease, -webkit-transform 150ms ease,
    transform 150ms ease, opacity 50ms ease 20ms, visibility 0ms 150ms;
  pointer-events: none;
  visibility: hidden;
  will-change: transform, opacity;

  ${({ theme }) => theme.breakpoints.l} {
    transform-origin: 50% 0%;
    margin: 0 auto;
    transform: scale(2.857142857142857, 1.375) translateY(58px);
  }
`;

export const BtnWrapper = styled.div`
  -webkit-box-align: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 40px;
  box-shadow: 0px 1px 2px rgb(0 0 0 / 8%), 0px 4px 12px rgb(0 0 0 / 5%);
  color: #222222;
  display: inline-flex;
  max-width: 100%;
  text-align: left;
  transition: box-shadow 0.2s ease;
  vertical-align: middle;
`;
export const SearchBtn = styled.button.attrs({ type: "button" })`
  -webkit-box-align: center;
  -ms-flex-align: center;
  appearance: none;
  background: transparent;
  border: 1px solid transparent;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: -1px;
  outline: none;
  overflow: visible;
  padding: 0px;
  text-align: inherit;
  text-decoration: none;
  user-select: auto;
  align-items: center;
  border-radius: 4px;
  flex: 0 1 auto;
  height: 48px;
  min-width: 0px;
  position: relative;
  z-index: 1;

  &:only-of-type {
    width: 300px;
  }
  &:first-of-type {
    padding-left: 8px;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
  &:last-of-type {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }
`;
export const SearchBtnLabel = styled.div`
  font-size: 14px;
  line-height: 18px;
  flex: 1 1 auto;
  min-width: 0px;
  font-weight: 600;
  padding: 0 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const SearchIcon = styled.div`
  background-color: #ff385c;
  border-radius: 50%;
  color: #ffffff;
  flex: 0 0 32;
  height: 32px;
  margin: 7px 7px 7px 0;
  padding: 10px;
  width: 32px;
`;
export const CenterMainOnScroll = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  left: 0px;
  position: absolute;
  text-align: left;
  top: 64px;
  transform-origin: 60px 0%;
  width: 100%;
  z-index: 2;
  pointer-events: none;
  transition: -ms-transform 150ms ease 0s, -webkit-transform 150ms ease 0s,
    transform 150ms ease 0s, opacity 50ms ease 20ms, visibility 0ms ease 150ms;

  ${({ theme }) => theme.breakpoints.sm} {
    padding-left: 24px;
    padding-right: 24px;
  }
  ${({ theme }) => theme.breakpoints.m} {
    padding-left: 40px;
    padding-right: 40px;
  }
  ${({ theme }) => theme.breakpoints.l} {
    top: 0px;
    transform-origin: 50% 0%;
  }
  ${({ theme }) => theme.breakpoints.xl} {
    padding-left: 80px;
    padding-right: 80px;
  }
`;
export const FormWrapper = styled.div`
  padding-bottom: 16px;
  position: relative;
  z-index: 1;
`;
export const Form = styled.form`
  margin: 0 auto;
  max-width: 850px;
`;
export const Fieldset = styled.fieldset`
  border: 0px;
  margin: 0px;
  padding: 0px;
`;
export const Sections = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: center;
`;
export const SectionsInput = styled.input.attrs({
  type: "radio",
  name: "refinement_paths",
})`
  outline: none;
  appearance: none;
  border: 0px;
  border-radius: 0px;
  margin: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  &:checked + span {
    cursor: default;
    opacity: 1;
    ::before {
      transform: scaleX(1);
    }
  }
`;
export const SectionsSpan = styled.span`
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  padding: 10px 12px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  z-index: 0;
  color: #ffffff;

  &::before {
    background-color: currentcolor;
    border-radius: 1px;
    bottom: 0px;
    content: "";
    height: 2px;
    left: 50%;
    margin-left: -9px;
    position: absolute;
    transform: scaleX(0);
    transition: 0.2s -ms-transform cubic-bezier(0, 0, 0.1, 1),
      0.2s -webkit-transform cubic-bezier(0, 0, 0.1, 1),
      0.2s transform cubic-bezier(0, 0, 0.1, 1);
    width: 18px;
  }

  &:hover {
    opacity: 0.8;
    text-decoration: none;
    &::before {
      transform: scaleX(0.2222222222222222);
    }
  }
  ${({ theme }) => theme.breakpoints.l} {
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
  }
  ${({ theme }) => theme.breakpoints.xl} {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    padding: 10px 16px;
  }
`;
export const SectionsLink = styled(SectionsSpan)`
  & a {
    cursor: pointer;
    position: relative;
    border-color: black;
    touch-action: manipulation;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    outline: none;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 24px;
    padding-right: 24px;
    transition: box-shadow 0.2s ease, -ms-transform 0.1s ease,
      -webkit-transform 0.1s ease, transform 0.1s ease;
    background: transparent;
    border: none;
    color: inherit;
    display: block;
    margin: 0px;
    padding: 0px;
    text-align: inherit;
    text-decoration: none;
    height: 100%;
    width: 100%;
  }
`;
export const FormFilter = styled.div`
  border: 1px solid #dddddd;
  border-radius: 32px;
  color: #222222;
  display: flex;
  height: 66px;
  position: relative;
  width: 100%;
  box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%);
  background-color: #ffffff;
`;
export const FilterWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  height: 100%;
  min-width: 0px;
  pointer-events: auto;
`;
export const FieldOne = styled.div`
  flex: 1 0 0%;
  min-width: 0px;

  ${({ theme }) => theme.breakpoints.l} {
    flex: 1.5 0 0%;
  }
`;
export const FieldTwo = styled.div`
  display: flex;
  flex: 2 0 0%;
  min-width: 0px;
`;
export const FieldThree = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  margin: -1px;
  min-width: 0px;
  position: relative;
  flex: 0.95 0 auto;
`;
export const VerticalLine = styled.div`
  align-self: center;
  border-right: 1px solid #dddddd;
  flex: 0 0 0px;
  height: 32px;
`;
export const FieldWrapperOne = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  flex: 1 0 0%;
  margin: -1px;
  min-width: 0px;
`;
export const FieldOneLabel = styled.label`
  cursor: pointer;
  display: block;
  background-clip: padding-box;
  border: 1px solid transparent;
  border-radius: 32px;
  flex: 1 0 0%;
  min-width: 0px;
  padding: 14px 32px;

  &::before {
    border-width: 0 1px;
    border-style: solid;
    border-color: #dddddd;
    content: "";
    display: none;
    height: 32px;
    margin-top: -16px;
    position: absolute;
    right: 0px;
    top: 50%;
    z-index: 0;
    border-left: 0px;
  }
  &::after {
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: 32px;
    bottom: 0px;
    content: "";
    left: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 0;
  }
  &:hover {
    ::before {
      display: block;
    }
    ::after {
      background-color: #ebebeb;
    }
  }
`;
export const LabelContain = styled.div`
  position: relative;
  z-index: 1;
`;
export const LabelTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding-bottom: 2px;
`;
export const SearchPlaceInput = styled.input`
  display: block;
  border: 0px;
  margin: 0px;
  padding: 0px;
  width: 100%;
  background: none;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: #222222;
  text-overflow: ellipsis;
  :focus {
    outline: none;
  }
`;
export const ClearBtn = styled.div`
  flex: 0 0 0%;
  position: relative;
  z-index: 5;
`;
export const ClearBtnWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
`;
export const XButton = styled.button`
  appearance: none;
  display: inline-block;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  color: rgb(34, 34, 34);
  cursor: pointer;
  touch-action: manipulation;
  position: relative;
  background: transparent;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s,
    transform 0.25s ease 0s;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgb(235, 235, 235);
  }

  span {
    position: relative;
    svg {
      display: block;
      fill: none;
      height: 12px;
      width: 12px;
      stroke: currentcolor;
      stroke-width: 4;
      overflow: visible;
    }
  }
`;
export const SuggestOptions = styled.div`
  left: 0px;
  position: absolute;
  right: 0px;
  top: 100%;
  z-index: 4;
  visibility: hidden;
`;
export const SuggestOptionsContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 100%;
  z-index: 1;
  background: #ffffff;
  border-radius: 32px;
  box-shadow: 0px 6px 20px rgb(0 0 0 / 20%);
  margin-top: 12px;
  max-height: calc(100vh - 220px);
  overflow-x: hidden;
  overflow-y: auto;
  padding: 16px 32px;

  margin-left: 0px;
`;
export const ListOptions = styled.ul`
  padding: 8px 0 0;
  margin: 0 -32px -8px;
  width: 500px;
  padding-bottom: 8px;
`;
export const OptionPlace = styled.li`
  cursor: pointer;
  list-style-type: none;
  width: 100%;
  display: flex;
  padding: 8px 16px 8px 32px;

  &:hover {
    background-color: rgb(247, 247, 247);
    border-color: rgb(247, 247, 247);
  }
`;
export const PlaceIcon = styled.div`
  -webkit-box-pack: center;
  -webkit-box-align: center;
  font-size: 17px;
  background-color: rgb(241, 241, 241);
  border: 1px solid rgba(176, 176, 176, 0.2);
  border-radius: 8px;
  min-width: 48px;
  height: 48px;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 22px;
    width: 22px;
    display: block;
    fill: currentcolor;
  }
  img {
    object-fit: cover;
    width: 48px;
    height: 48px;
    border-radius: 8px;
  }
`;
export const PlaceName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: rgb(34, 34, 34);
    max-height: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
`;
export const FieldOneSpans = styled.span`
  border: 0px;
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
export const DateFields = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex: 1 0 0%;
  margin: -1px;
  min-width: 0px;
  position: relative;
`;
export const DateFieldBtn = styled.div`
  appearance: none;
  background: transparent;
  border: 0px;
  color: inherit;
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0px;
  outline: none;
  overflow: visible;
  padding: 1px;
  text-align: left;
  text-decoration: none;
  user-select: auto;
  flex: 1 0 0%;
  width: 0px;
  z-index: 1;

  ::before {
    border-width: 0 1px;
    border-style: solid;
    border-color: #ffffff;
    content: "";
    display: none;
    height: 32px;
    left: 0px;
    margin-top: -16px;
    position: absolute;
    right: -1px;
    top: 50%;
    z-index: 0;
    background-color: #ffffff;
  }
  ::after {
    background-clip: padding-box;
    border: 1px solid transparent;
    border-radius: 32px;
    bottom: 0px;
    content: "";
    left: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 0;
  }
  :hover {
    ::before {
      display: block;
    }
    ::after {
      background-color: #ebebeb;
    }
  }
`;
export const BtnContainer = styled.div`
  padding: 14px 24px;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  width: 100%;
  z-index: 1;
`;
export const TitleDateBtn = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding-bottom: 2px;
`;
export const SelectedDate = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #717171;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
export const GuestFieldBtn = styled(DateFieldBtn)`
  ::before {
    border-right: 0px;
    right: 50%;
  }
`;
export const SearchSubmitBtn = styled.div`
  flex: 0 0 auto !important;
  margin-left: -6px !important;
  padding-right: 9px !important;
  position: relative !important;
  z-index: 5 !important;
`;
export const SubmitBtn = styled.button.attrs({ type: "button" })`
  appearance: none !important;
  background: transparent !important;
  border: 0px !important;
  color: #ffffff !important;
  cursor: pointer !important;
  display: inline-block !important;
  font-family: inherit !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 16px !important;
  margin: 0px !important;
  outline: none !important;
  overflow: hidden !important;
  padding: 0px !important;
  text-align: inherit !important;
  text-decoration: none !important;
  user-select: auto !important;
  background-color: #ff385c !important;
  border-radius: 24px !important;
  height: 48px !important;
  max-width: 48px !important;
  position: relative !important;
  transition: 0.2s max-width cubic-bezier(0.35, 0, 0.65, 1) !important;
  vertical-align: middle !important;
  z-index: 0 !important;

  ::before {
    background: linear-gradient(
      to right,
      #e61e4d 0%,
      #e31c5f 50%,
      #d70466 100%
    ) !important;
    bottom: 0px !important;
    content: "" !important;
    left: 0px !important;
    position: absolute !important;
    right: 0px !important;
    top: 0px !important;
    transition: 0.2s opacity cubic-bezier(0.35, 0, 0.65, 1) !important;
    will-change: opacity !important;
    z-index: 0 !important;
    opacity: 0 !important;
  }
  :hover::before {
    opacity: 1 !important;
  }
`;
export const SubmitBtnContent = styled.div`
  display: inline-flex !important;
  padding: 16px !important;
  position: relative !important;
  z-index: 1 !important;

  svg {
    display: block;
    fill: none;
    height: 16px;
    width: 16px;
    stroke: currentcolor;
    stroke-width: 4;
    overflow: visible;
  }
`;
export const SearchBtnTitle = styled.div`
  opacity: 0 !important;
  padding-left: 8px !important;
  padding-right: 4px !important;
  transition: 0.1s opacity cubic-bezier(0.35, 0, 0.65, 1) !important;
  transition-delay: 0.1s !important;
`;
