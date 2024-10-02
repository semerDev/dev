import React, { useState } from "react";
import '../styles/accueil.css';

const HomePages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "data:image/jpeg;base64,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",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZMAAAB9CAMAAABQ+34VAAABKVBMVEX///9cJINBwPBUP5RSSJpKdrpRSptVPZNbJ4VNAHqw1u84pd5EquBIwvBUQJUyp99zzfPU6fdVGIO/utRJMpColLssvO9LRJk/crmOi7uuv91TCH1XNY7p5O5KcrjP7fro9v3c1OOchLF1TZQ+ZrFoN4u5sc9CM5LDzOOUfK5ZL4rJvtXi3OjTyd1MY6x7WJzz8PaI1PRPUqBGmdNNJomEZqNedLWGueFNXahIicjZ4vBtRJOplr2koMbo7fadw+SMcahJF4RJfsBHj81wR5GWlsG2pseCda4/PJdraaqTrdVDIYk+AHA8SZ47U6U0g8dmqdtmjsZln9OirNCazOw8AIBiYKU5NZRpuua74PUiAICEgLUYX7HM1ulsjcWNpdB8lcez0Oo5J44PbnyZAAAPxUlEQVR4nO2dC3ubthrHoWkS6LY2k0OT1qENOGbldiCb2aWQFneUZkvX7qxLd3K2dT39/h/i6AYWNsLYxrHd8n/61I6QXoR+6JWEkSQI6yJ3sAu1tQX/bd3et1ednVZCy2Qd1TJZP7VM1k8tk/VTy2T91DJZP7VM1k8tk/VTy2T91DJZP7VM1k/uxRHSLtaHlsk6SHvByl11dtZL/ku5ll46VUbc1AxCMITxhuW6NBbJZOfDea6Dg/NfCnrFqNLKz4dEz549ez2uHxn9OpHy1meffXYn1+/MkbtQN2a8mrsFlURQgFhLMpeJbQIZACBJkjWpI6rBQkze7ux8PanvGf2LqNIKgkH0w0gjFN9kKmPyOaNbzJG7N27c+GLGq0FpcpUl7tZDwmPixDLCYVllQJpi4px/3QCTR2VMfpydyZ1lM0lruq5y36V6MqofkIkkAjAs913Wwkxe/HHO912v6vqu7cMq3/W62ndBFv/JdMUcgZ7r7qxM9jJ9Uc5Era0S44osYiISkPtmamtOWTrftBZlUrD3pEpVVioT5jo+fnI8kRQxufNlmVFctvNe194clWyKel1CRE4MvyKaPli4PVm1+EwWUvNM+sRtdROtOl7LhKfGmYQEiRxNi9gy4alpJjpFMr2sWyY8NczEkUnjrkyP2jLhqWEmHu1x1Yj6aTI55g3SGTXLRKXVpE5Jf6pMYIFfK5OItiZ14prDwWAwbJlMqoRJ1aBiihLsusSkTlw7RZrSYebJXyCTjJUF018bE/3lrFkbiboufX4LjPz/8ivRwZ9NnOGv+4ulvzYmcnfWrOXKmpN0bguszi46vEPaH/caOMH9kw1hknbnZ+LO0MRP1+4+l8mL8yaYbB9uCBNJnJ+J3W2Qib3PZfLkj4MGmPx9uCFMXLkBJo34rrf8evL8oAkm75bC5PhhruOS8CvMZBSnjOg4Ew80wKTGKH6qnA+3uUzOdxpg8uRkKb7r4Z3859uHhbg0EP9iNfqJt+yB/hgTVRYXYKKR9kQM5rYw0otdLhOjESb/HC6FyZd5yZcyuTE7Ex0swoT2u6T5LeTyL7a4THZuNsHkZHspTI73TqHuTjB5eEqEmZzmuhImNcYEVpMFmNDxiSTPORJkdLbPZeKe7zTA5P7hcpgQTTKhmr2NT7uLMaGPIEE8vwmq/S0uk59uNsHkwfaGMMGvoizAJAW0opT9TD+LOnwm6lc7DTB5dLghTGx5QSZZgyKG89vAurnLZXLvoAkm77Y3hElv0XqS/36yoPfSBltcJl/dbIDJ45MNYeLICzOhveFFobw44jIxzptg8s+DDWFigoWZCDHIoPSr3iSuln+xy2VysNMAEx9Xkw1g4pNqshgTAVDvBRv6eN6W/vk+l4l93gSTN4cbwiTqNsHEybwXeg3Sq3zrjqvBLpfJ20bqycmDDWGSvUm/4CjcHUFBWMJoZh9m7G/xmDiwhV+cyaNNYWLLzTCB7XzuviwLYZH02Sb33N7lMvnzoAkmzx5sCJNQbIiJ4PfBiAma2TAYykF9L+YOtnhM/K9uNsDk8cmGMNGyaiKKvVqqGhZG2VyHfP6JBC7rerGfjrhMzs4pk52vf+LqW0Zvyk7w/gFlsv3s3b/H9FuZ/sfJ6bKZxDUnZo1mA1WZ9U0ZSONzggbDgTndi6kXu1wmEAllspN9YEDjs4KyeUGv3pfl7SRngrkw+qF0ptaPTzlZXTITX55OoagpLs6PAMQyPk9rMLwMjOou8r19LpMOywTDmDZP633JCd6wTJ6VIynM01oVE3b+Ys0pWtWGoTTdQljGNRiGZxVYLna5TN4e5EwOzgtztJDKZmm9LzkBQkKZHDJ6NjlPi6J5vSImTDUBjlZL1YaJ1DSQh4MJLoOhx5v7nu5zmWiwhc/a+D+dCj3OVTJD6z7D5OfHtcSb57VcJka3tlOaWW5JdTmyhkflv46w60iMxXhxMGIyf79r+0HOZL37Xf36DcU8gtXlcjgozvu1hmFJP8wecJn4H242wOTvkw1hosnLZYIEq8sIC56IbV1OvuDyll9Pnt9ugsm7BxvCpNARXhITAVUXj1aXbHp8byyGc8FngluTRZk8+WtTmLCua4lMkOz4cjBas8A6Kg7vjX0uE6cRJo9OWiZlMsIhA6V4iM9EbZksVW4yzKEU3FfLRFgVEzgkz6vKgJ213TIRVsdE8MMBhTJkBvUtE2GFTATBo1CsF6OwlomwUibC7mRFaZkIq2WiDidalJaJsFomgkm9124e0jIRVswkqygj59UyEVbMREio88of3LdMhFUziYjzGpxlAS0TYdVMbMJkP1/koGUirJqJQ5bdPspHKC0TYdVM/OGnxoQcOa402zJZQHMzKT2Say2Y7JtZwMfPBBX43dNKs6tlQgcoo4H8x8/karrzapjJjJOwNdLGD/LC//iZkCXQ71at0tIsE/vlbFuW0L7wRf4CyyfA5BaBsnd1jPTw6nRv3JM1yiSVpe5Mk4DomHGYB3wCTIS98TVXlslElyVJ9GZJQZ+tjNZn+WiYTKyBw+g0W3aFaJlM7Jd4rZUZFh6k3a5Rc/LRMEFLqewd89Idn9LlcPDH3viaK43WE7xUlFx/9a503HV9NEym6vjq6tatq6viGl9UCzDx+wlUn2lAAjAbFPoEkqlZjTN5hKcGvRv9PReTp7/9CjXxev1S1+Gejwl+oVVmG3UP1Ns/gOiMVhPGQvNMXqF9gr4d/T0fE7xb0HfjwRvBJINi8tKwygaMZ0zYujL5ZoOZCAFuU0BYo0u8i9/wsgrzIlsmQvNMcIcYdomnNyq9wcTbXS0TrMaZCB0yPb7br3zOkr1yd1mcdNoyEZbBRFDp9HjZ40/yNeirqZdjz2JaJsJi4xMOk3zjOVHup6Xtih2S5t0ajtellolQygTo9USWlipjIqg9OVtvpTe+dYOmDGglGUz2BOoy2Xn7vJb+efd9BZPtdz+X67uinv5awYQ8S4Sak0Cu3E4JExHUlMhlIghuX87WW+nK/VhJDdvuGJEZDvFELURkeDaZrDaTHTL/+gB+ySbL/5LPkMfTsNmdTHlMiEYT5MkMbN7+sqVMPi/d73ce5c8kb5QwmUkcJpCKl69ZIA0GaDvTIRjkExoHQ7MsYX0m9dYsoHvL8pnUWbMgUzmT0v1+59HY3rJSt27dmNBL/khEVaSyNQsQECsqT2Zc7I/0oTh37sPt27cPSsUsVpBXE1RTsrryPcPkr5MThIVZrIAlQyrK69r1hGyLPbnf7zwqbIt9Q4iU+VU5OnQiT5YByFctQNs1XYYRt5vs3rt3L28M7hWi+c/PauhNuXIrj4vh91k9naKJpXC+/J1V9YsP03Va0ILGpsixIzNIEJHQixVj8TW6W7Vq1apVq1atWrVq1arV+qpqs92yQ43szdvKlSrePUkAP508+cJwKs+/wwMjscEttFUpLgYkzWxR3KTMhNzLWkLfOLGqtvPz+txDLphkYgDIRElme7t7UnKDTLzxBav7td60uVYFgDBxAWFhx1Wx52FilhyYTfFsi95XSQvG3anezLbRTSoQaT3p19nuch4musXdUHmK1GBRmpupjAksgBqxK5hoPCaCMm/Jqt0GndYGKWcSoOvvhLIs0cpsm57nocfrvg5kuYcLljKJRFkOmZLuxJ7Xk3CAguJmvgYzcbB3RDaQNdfD/jsJYmjGQ9H7RtGmF3hCCmRP0Hv9xEsEtxegHLkoOx7OmxPIspz/WBnHgp3IAJlNSYYFG30onmCEIPYFzQMhOYfbk2W8JXHqBbYaypbt9wKcH0dH1uGJ/CQgNyfKIJPiOpUxcdGJFQCvxbFQbvxEMhxHhqXrW4mDulCoO0aYeKGKNk3JbmLVkgzNMXA9CT1ozsi6YMR3oWLqIz+eInM9gIg5iLxpxYavmt20YNPRRSM0YImqthg5muC7QEeHdMdRPdRJ0lBW/FiiUHo9I9Y0E0XyU2xcMLrwnKYY6Y4telrianEXheN8+UkP/meDVIpSeE61j1ZAtOVAcxwN2XB65L7D4TiFmoyv8bpk5fVEQHss4rJ0UQ+2Z6GvuoO2fcAxFLQbJmbSIftiRlm/WMJdGey7UvIbvW6RI8R3jeLGKGYfnVFHd6cpYawePAFrM8q6fg7Zjt5HN2qMLdioaENyGNA+u9fH93EooaxTJujeMiVcIyRcoHgzvG6UX6UjWTRrfTSVCXjkRLqQ+wLMhElxjWKZpKT0fVgULshdOd3bz0FlgPMbkxJ3uw5NRUiijx65o+wuee00Z0I7ECmaX6fCAjBwPJOcDxkI+iObikiLwCHb0WMmupj1j7JWxqPzwjxixUTQbJYJDqcXgjDbgPzQicw5+Q7eiIlNLmGCCZviGsUyMS0TC94dCshe5nWy+xF1lnF++6GOYgUyaTZoPcJMQIINeHSsmDMBPRpOiikmgwST1B4XFn1uEzUE2blZJn4fWGQjKFcKsLE+HWnQMixhkmeL3BSpFKN0Omp6qGmBMIlIPieY0BQmuN4xTIGJaLtYalbQAvJJNPeofuP8SqFGopEoXlayiIlXOJQx8UFAw/GfCb3nGSYWY1PJzs0yQe0yACjAFhUSlf687zGAK5lEokESOnWYhL1iimsUy0TPQTBfHVpxfeTDcH6TYoc4ICWL2xOpOM90VE/Yjrapm8QnUCaodxAyNjlM4JdOCKNqoNhDrs0kBaOXNIpMjBLfhVY/ZlNcoygT2/LzK0JKR19J+0fqC84vgw5JIQWPfXJcfB6WMwkkJhDa6ONOE2WCHiWwNrlMSKn5Y56khIkpljHJa7wwzsTvxpl1aM8i371iimtUIOIPG3v6fpIF+7QnAvOnkLY8Ru0zZqIWJ2PhHiRs3tH4RJMLT/SMrGVwR5PqNHQmB6BGnpRaijo3rM1SJjp+GKCixk2XC3cvy4RUaqcvlTERPCkHX2QCO5W47uErIX0DE/kuNsU1yhOVSFEiXOKCH4qRYRjo8lGPHQ4QUFY90FG1GPcHe1bHR9cZph3DyGqS2TVdO4zwxdvdHjpECy0F2Tt2huyRcJ/0K1N0+bAv3El7BBdjUwEpNQ36HcOGSXRkILA1m9Yv2YS5zLYYpOOJGKCABCi2ntiImom3mKKPq60EX4mso4Twm9M1qQckK7RHMsq3hIc/3dAwQruH7k9/lOIalUaFlxq1FH1H31Q9CWPiejpB2NNVEpt8uihVnlMjSEzV10nx2/CQTjuzrjJ6roLDXcElFclXMBN4N3SyOzG3aSsKvYkdE463YVxkxI+80KPvtaoGjKqr2RWQTOAAX+/Bsb6mqCgAm1BwtqIIn9dBl4e+qeQDHSHn8mH+dMxEcIMk1rLwPMUnIpP/a8xqBD6hwudo3Zj4LZOWyRqqZbJ+0qs2Dl6B/DCJV50HqP8DpiNGuuWVyO0AAAAASUVORK5CYII=",
    "data:image/jpeg;base64,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",
  ];

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  return (
    <>
      <div className="homePage">
        <div className="homePage_content">
          <div className="homePage_content_left">
            <h2>Présentation</h2>
            <p>
              L’association se donne pour mission, toujours dans un esprit écologique, social et solidaire :
              <ul>
                <li>D’accompagner la création de nouveaux imaginaires et récits afin de semer les graines d’une transformation sociétale</li>
                <li>De promouvoir les démarches et initiatives éco-citoyennes</li>
                <li>De faire avec, de faire en pratiquant et en participant avec les acteurs et actrices d’un territoire</li>
                <li>De créer des espaces physiques ouverts de manière inconditionnelle dans le respect des spécificités de chaque personne.</li>
              </ul>
              Pour atteindre ses objectifs, l'association utilisera l’ensemble des moyens disponibles tant que ces derniers sont respectueux du triptyque écologie, social, solidarité. Les moyens de la formation professionnelle, la vente de prestations ainsi que l'accompagnement et l'expertise feront partie des possibilités pour parvenir à remplir ses objectifs.
            </p>
            <h2>Nos partenaires</h2>
          </div>
          <div className="homePage_content_right">
            <div className="img-carousel" onClick={handleImageClick}>
              <div className="carousel-arrow left" onClick={handlePrevClick}>&lt;</div>
              <img src={images[currentImageIndex]} alt="carousel" />
              <div className="carousel-arrow right" onClick={handleNextClick}>&gt;</div>
              <div className="carousel-pagination">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`carousel-pagination-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePages;