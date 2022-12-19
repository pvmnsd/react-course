import mainPhoto from '../main.png';

const InformationPage = () => {
  return (
    <div>
      <div className="information">
        <div className="information__container _container">
          <div className="information__mainblock">
            <div className="information__aboutit aboutit">
              <div className="aboutit__title">
                Hello <br /> I’mJohn <br />
                Doe
              </div>
              <div className="aboutit__subtitle">
                A full stack allaround designer that tristique <br /> est placerat in massa
                consectetur quisque <br />
                lobortis Vitae faucibus diam consequat maecenas
                <br /> turpis.
              </div>
            </div>
            <div className="information__image">
              <img src={mainPhoto} alt="main photo" />
            </div>
          </div>
          <div className="information__button">
            <a href="#" className="download-button">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about__container _container">
          <div className="about__main">
            <div className="about__title">
              About <p></p>
            </div>
            <div className="about__subtitle">
              Dolor sit amet, consectetur adipiscing elit viverra tristique <br /> placerat in massa
              consectetur quisque
            </div>
            <div className="about__text">
              Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu. Vitae faucibus
              diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam. Nunc amet
              tristique volutpat adipiscing vulputate phasellus. Volutpat faucibus praesent ac
              lobortis aliquam dolor.
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="services__container _container">
          <div className="services__main">
            <ul className="services__list">
              <li className="services__item">
                <svg
                  width="101"
                  height="101"
                  viewBox="0 0 101 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M55.5 34.873C55.5 37.637 53.261 39.876 50.5 39.876C47.737 39.876 45.499 37.637 45.499 34.873C45.499 32.114 47.737 29.875 50.5 29.875C53.261 29.875 55.5 32.114 55.5 34.873Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M50.5 62.375C53.2614 62.375 55.5 60.1364 55.5 57.375C55.5 54.6136 53.2614 52.375 50.5 52.375C47.7386 52.375 45.5 54.6136 45.5 57.375C45.5 60.1364 47.7386 62.375 50.5 62.375Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.5 71.123C33.2614 71.123 35.5 68.8845 35.5 66.123C35.5 63.3616 33.2614 61.123 30.5 61.123C27.7386 61.123 25.5 63.3616 25.5 66.123C25.5 68.8845 27.7386 71.123 30.5 71.123Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M70.499 71.1241C73.261 71.1241 75.5 68.885 75.5 66.1231C75.5 63.3611 73.261 61.1221 70.499 61.1221C67.7371 61.1221 65.498 63.3611 65.498 66.1231C65.498 68.885 67.7371 71.1241 70.499 71.1241Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M55.076 36.876C54.305 38.638 52.548 39.875 50.5 39.875C48.451 39.875 46.696 38.64 45.923 36.878L30.5 43.624V61.125C33.261 61.125 35.5 63.361 35.5 66.123C35.5 66.836 35.346 67.512 35.076 68.127L50.501 74.873L65.921 68.127C65.652 67.514 65.498 66.836 65.498 66.123C65.498 63.361 67.735 61.125 70.498 61.125H70.5V43.624L55.076 36.876Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M70.502 26.126L55.076 32.871C55.345 33.487 55.5 34.16 55.5 34.873C55.5 37.637 53.261 39.876 50.5 39.876V52.376C53.261 52.376 55.5 54.614 55.5 57.376C55.5 58.089 55.347 58.763 55.076 59.376L65.921 64.122C66.693 62.358 68.448 61.126 70.498 61.126C72.546 61.126 74.305 62.36 75.076 64.124L90.498 57.376L90.5 57.377V34.875L70.502 26.126Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M45.499 57.375C45.499 54.613 47.737 52.375 50.5 52.375V39.875C47.737 39.875 45.499 37.636 45.499 34.872C45.499 34.159 45.653 33.484 45.922 32.871L30.502 26.126L10.5 34.875V57.377L10.502 57.375L25.923 64.121C26.694 62.357 28.449 61.125 30.499 61.125C32.549 61.125 34.305 62.359 35.077 64.123L45.922 59.377C45.653 58.762 45.499 58.088 45.499 57.375Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Service name</p>
              </li>
              <li className="services__item">
                <svg
                  width="101"
                  height="101"
                  viewBox="0 0 101 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M85.1665 65.503C85.1665 79.306 73.9755 90.5 60.1705 90.5C46.3585 90.5 35.1665 79.306 35.1665 65.503C35.1665 51.691 46.3585 40.5 60.1705 40.5C73.9755 40.5 85.1665 51.691 85.1665 65.503Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M50.1585 70.499L90.1665 10.5H10.1665L50.1585 70.499Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M70.1646 70.499L90.1665 90.5L70.1646 70.499Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35.1665 30.502L10.1665 55.498L35.1665 30.502Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.6655 67.999H10.1665V85.502H27.6655V67.999Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M45.1665 25.5L56.4145 33L67.6625 25.5L56.4145 17.999L45.1665 25.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Service name</p>
              </li>
              <li className="services__item">
                <svg
                  width="101"
                  height="101"
                  viewBox="0 0 101 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.8335 21.502C20.4909 21.502 21.8345 20.1584 21.8345 18.501C21.8345 16.8436 20.4909 15.5 18.8335 15.5C17.1761 15.5 15.8325 16.8436 15.8325 18.501C15.8325 20.1584 17.1761 21.502 18.8335 21.502Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.3335 24.001C35.3711 24.001 37.8335 21.5385 37.8335 18.501C37.8335 15.4634 35.3711 13.001 32.3335 13.001C29.2959 13.001 26.8335 15.4634 26.8335 18.501C26.8335 21.5385 29.2959 24.001 32.3335 24.001Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M50.8335 26.501C55.2518 26.501 58.8335 22.9193 58.8335 18.501C58.8335 14.0827 55.2518 10.501 50.8335 10.501C46.4152 10.501 42.8335 14.0827 42.8335 18.501C42.8335 22.9193 46.4152 26.501 50.8335 26.501Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M69.3325 24.002C72.3707 24.002 74.8335 21.5391 74.8335 18.501C74.8335 15.4629 72.3707 13 69.3325 13C66.2944 13 63.8315 15.4629 63.8315 18.501C63.8315 21.5391 66.2944 24.002 69.3325 24.002Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M82.8335 21.501C84.4904 21.501 85.8335 20.1578 85.8335 18.501C85.8335 16.8441 84.4904 15.501 82.8335 15.501C81.1766 15.501 79.8335 16.8441 79.8335 18.501C79.8335 20.1578 81.1766 21.501 82.8335 21.501Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.8335 37.501C21.8711 37.501 24.3335 35.0385 24.3335 32.001C24.3335 28.9634 21.8711 26.501 18.8335 26.501C15.7959 26.501 13.3335 28.9634 13.3335 32.001C13.3335 35.0385 15.7959 37.501 18.8335 37.501Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34.8325 37.5C36.4894 37.5 37.8325 36.1569 37.8325 34.5C37.8325 32.8431 36.4894 31.5 34.8325 31.5C33.1757 31.5 31.8325 32.8431 31.8325 34.5C31.8325 36.1569 33.1757 37.5 34.8325 37.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M50.8335 42.501C53.8711 42.501 56.3335 40.0385 56.3335 37.001C56.3335 33.9634 53.8711 31.501 50.8335 31.501C47.7959 31.501 45.3335 33.9634 45.3335 37.001C45.3335 40.0385 47.7959 42.501 50.8335 42.501Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M66.8325 37.501C68.4899 37.501 69.8335 36.1574 69.8335 34.5C69.8335 32.8426 68.4899 31.499 66.8325 31.499C65.1751 31.499 63.8315 32.8426 63.8315 34.5C63.8315 36.1574 65.1751 37.501 66.8325 37.501Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M82.8335 37.502C85.8716 37.502 88.3345 35.0391 88.3345 32.001C88.3345 28.9629 85.8716 26.5 82.8335 26.5C79.7954 26.5 77.3325 28.9629 77.3325 32.001C77.3325 35.0391 79.7954 37.502 82.8335 37.502Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.8335 58.501C23.2518 58.501 26.8335 54.9193 26.8335 50.501C26.8335 46.0827 23.2518 42.501 18.8335 42.501C14.4152 42.501 10.8335 46.0827 10.8335 50.501C10.8335 54.9193 14.4152 58.501 18.8335 58.501Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M37.3325 56.001C40.3701 56.001 42.8325 53.5385 42.8325 50.501C42.8325 47.4634 40.3701 45.001 37.3325 45.001C34.295 45.001 31.8325 47.4634 31.8325 50.501C31.8325 53.5385 34.295 56.001 37.3325 56.001Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M50.8335 53.499C52.4904 53.499 53.8335 52.1559 53.8335 50.499C53.8335 48.8422 52.4904 47.499 50.8335 47.499C49.1766 47.499 47.8335 48.8422 47.8335 50.499C47.8335 52.1559 49.1766 53.499 50.8335 53.499Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M64.3335 56.001C67.3711 56.001 69.8335 53.5385 69.8335 50.501C69.8335 47.4634 67.3711 45.001 64.3335 45.001C61.2959 45.001 58.8335 47.4634 58.8335 50.501C58.8335 53.5385 61.2959 56.001 64.3335 56.001Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M82.8335 58.501C87.2518 58.501 90.8335 54.9193 90.8335 50.501C90.8335 46.0827 87.2518 42.501 82.8335 42.501C78.4152 42.501 74.8335 46.0827 74.8335 50.501C74.8335 54.9193 78.4152 58.501 82.8335 58.501Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.8335 74.501C21.8711 74.501 24.3335 72.0385 24.3335 69.001C24.3335 65.9634 21.8711 63.501 18.8335 63.501C15.7959 63.501 13.3335 65.9634 13.3335 69.001C13.3335 72.0385 15.7959 74.501 18.8335 74.501Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M34.8325 69.5C36.4894 69.5 37.8325 68.1569 37.8325 66.5C37.8325 64.8431 36.4894 63.5 34.8325 63.5C33.1757 63.5 31.8325 64.8431 31.8325 66.5C31.8325 68.1569 33.1757 69.5 34.8325 69.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M56.3335 64.002C56.3335 67.037 53.8705 69.5 50.8335 69.5C47.7975 69.5 45.3315 67.037 45.3315 64.002C45.3315 60.962 47.7975 58.5 50.8335 58.5C53.8705 58.5 56.3335 60.962 56.3335 64.002Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M66.8325 69.501C68.4899 69.501 69.8335 68.1574 69.8335 66.5C69.8335 64.8426 68.4899 63.499 66.8325 63.499C65.1751 63.499 63.8315 64.8426 63.8315 66.5C63.8315 68.1574 65.1751 69.501 66.8325 69.501Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M82.8335 74.502C85.8716 74.502 88.3345 72.0391 88.3345 69.001C88.3345 65.9629 85.8716 63.5 82.8335 63.5C79.7954 63.5 77.3325 65.9629 77.3325 69.001C77.3325 72.0391 79.7954 74.502 82.8335 74.502Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.8335 85.501C20.4909 85.501 21.8345 84.1574 21.8345 82.5C21.8345 80.8426 20.4909 79.499 18.8335 79.499C17.1761 79.499 15.8325 80.8426 15.8325 82.5C15.8325 84.1574 17.1761 85.501 18.8335 85.501Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.3335 88C35.3711 88 37.8335 85.5376 37.8335 82.5C37.8335 79.4624 35.3711 77 32.3335 77C29.2959 77 26.8335 79.4624 26.8335 82.5C26.8335 85.5376 29.2959 88 32.3335 88Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M50.8335 90.5C55.2518 90.5 58.8335 86.9183 58.8335 82.5C58.8335 78.0817 55.2518 74.5 50.8335 74.5C46.4152 74.5 42.8335 78.0817 42.8335 82.5C42.8335 86.9183 46.4152 90.5 50.8335 90.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M69.3325 88.001C72.3707 88.001 74.8335 85.5381 74.8335 82.5C74.8335 79.4619 72.3707 76.999 69.3325 76.999C66.2944 76.999 63.8315 79.4619 63.8315 82.5C63.8315 85.5381 66.2944 88.001 69.3325 88.001Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M82.8335 85.5C84.4904 85.5 85.8335 84.1569 85.8335 82.5C85.8335 80.8431 84.4904 79.5 82.8335 79.5C81.1766 79.5 79.8335 80.8431 79.8335 82.5C79.8335 84.1569 81.1766 85.5 82.8335 85.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Service name</p>
              </li>
              <li className="services__item">
                <svg
                  width="101"
                  height="101"
                  viewBox="0 0 101 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.5 28.626V46.75H28.625C18.613 46.75 10.5 38.636 10.5 28.626Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.625 10.5H10.5V28.626C10.5 18.615 18.613 10.5 28.625 10.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M46.75 28.625V10.5H28.625C38.633 10.5 46.75 18.615 46.75 28.625Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.625 46.75H46.75V28.625C46.75 38.636 38.633 46.75 28.625 46.75Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M46.75 54.248H10.5V90.5H46.75V54.248Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M90.5 10.5H54.248V46.749H90.5V10.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.625 46.751C38.6352 46.751 46.75 38.6361 46.75 28.626C46.75 18.6158 38.6352 10.501 28.625 10.501C18.6148 10.501 10.5 18.6158 10.5 28.626C10.5 38.6361 18.6148 46.751 28.625 46.751Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.625 39.251C34.493 39.251 39.25 34.494 39.25 28.626C39.25 22.758 34.493 18.001 28.625 18.001C22.757 18.001 18 22.758 18 28.626C18 34.494 22.757 39.251 28.625 39.251Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.625 31.751C30.3509 31.751 31.75 30.3519 31.75 28.626C31.75 26.9001 30.3509 25.501 28.625 25.501C26.8991 25.501 25.5 26.9001 25.5 28.626C25.5 30.3519 26.8991 31.751 28.625 31.751Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M54.25 72.375V90.5H72.375C62.364 90.5 54.25 82.385 54.25 72.375Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M72.375 54.248H54.25V72.375C54.25 62.363 62.364 54.248 72.375 54.248Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M90.5 72.373V54.248H72.375C82.385 54.248 90.5 62.363 90.5 72.373Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M72.375 90.5H90.5V72.373C90.5 82.385 82.385 90.5 72.375 90.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M72.375 90.5C82.3852 90.5 90.5 82.3852 90.5 72.375C90.5 62.3648 82.3852 54.25 72.375 54.25C62.3648 54.25 54.25 62.3648 54.25 72.375C54.25 82.3852 62.3648 90.5 72.375 90.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M83 72.375C83 78.244 78.246 83 72.375 83C66.508 83 61.75 78.244 61.75 72.375C61.75 66.506 66.508 61.748 72.375 61.748C78.246 61.748 83 66.506 83 72.375Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M72.375 75.5C74.1009 75.5 75.5 74.1009 75.5 72.375C75.5 70.6491 74.1009 69.25 72.375 69.25C70.6491 69.25 69.25 70.6491 69.25 72.375C69.25 74.1009 70.6491 75.5 72.375 75.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Service name</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
