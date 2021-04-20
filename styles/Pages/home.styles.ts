import styled from "styled-components";

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
  position: sticky;
  color: rgb(255, 255, 255);
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
  outline: none;
  align-items: center;
  display: inline-flex;
  height: 80px;
  position: relative;
  vertical-align: middle;
  z-index: 1;
  color: rgb(255, 255, 255);
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
