import styled from 'styled-components'
export const Spinner = styled.div`
  width: 120px;
  height:120px;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  border: 4px dashed #ccc;
  border-top-color: #f0cd03;
  animation: spinner-rotate 0.4s infinite linear;
`

export const LoadingSpinnerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #2f2f2f;
  position: fixed;
  z-index: 11;

  span {
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: white;
  }

  img {
    width: 40px;
  }

  @keyframes spinner-rotate {
    0% {
      transform: rotate(0deg);
    }

    10% {
      transform: rotate(10deg);
    }
    20% {
      transform: rotate(15deg);
    }
    30% {
      transform: rotate(20deg);
    }
    40% {
      transform: rotate(60deg);
    }
    50% {
      transform: rotate(65deg);
    }
    60% {
      transform: rotate(110deg);
    }
    70% {
      transform: rotate(150deg);
    }
    80% {
      transform: rotate(200deg);
    }
    90% {
      transform: rotate(210deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
