class ProjectFooter extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

    }

    connectedCallback() {
    }
    disconnectedCallback() {
    }
}

customElements.define('project-footer', class extends ProjectFooter {
    connectedCallback() {
        this.innerHTML = `
            <section class="section-gap achivement-area">
			<div class="container text-center" style="padding-top: 96px;">
				<div>
					<h2>Projects and Experiences</h2>
				</div>
				<div class="row align-items-center">
					<div class="col-lg-2"></div>
					<div class="col-lg-8">
						<div class="total-achivement">
							<div class="row">
								<div class="col-md-4 col-sm-6">
									<div class="single-achivement">
										<a href="clinic-web" target="_blank"><img class="app-icons" src="../img/televet-logo.jpeg" alt="televet logo" /></a>
										<h6><a href="foxy-birds">TeleVet B2B Web App</a></h6>
									</div>
								</div>
								<div class="col-md-4 col-sm-6">
									<div class="single-achivement">
										<a href="pet-web" target="_blank"><img class="app-icons" src="../img/televet-logo.jpeg" alt="televet logo" /></a>
										<h6><a href="foxy-birds">TeleVet B2C Web App</a></h6>
									</div>
								</div>
								<div class="col-md-4 col-sm-6">
									<div class="single-achivement">
										<a href="winter-hearth-studios" target="_blank"><img class="app-icons" src="../img/winter-hearth-logo.png" alt="Winter Hearth Studios logo"/></a>
										<h6><a href="foxy-birds">Winter Hearth Studios</a></h6>
									</div>
								</div>
								<div class="col-md-4 col-sm-6">
									<div class="single-achivement">
										<a href="foxy-birds" target="_blank"><img class="app-icons" src="../img/fox-icon.png" alt="Foxy Birds" title="Foxy Birds mobile game"/></a>
										<h6><a href="foxy-birds">Foxy Birds (2019)</a></h6>
									</div>
								</div>
								<div class="col-md-4 col-sm-6">
									<div class="single-achivement">
										<a href="trivago" target="_blank"><img class="app-icons" src="../img/trivago-logo-506x506.png" alt="trivago UX Design Internship" title="Foxy Birds"/></a>
										<h6><a href="trivago">UX Design (2019)</a></h6>
									</div>
								</div>
								<!-- <div class="col-md-4 col-sm-6">
									<div class="single-achivement">
										<a href="my-daily-bread" target="_blank"><img class="app-icons" src="../img/mdb-logo.png" alt="My Daily Bread mobile app" title="My Daily Bread"/></a>
										<h6><a href="my-daily-bread">My Daily Bread (2020)</a></h6>
									</div>
								</div> -->
								<!-- <div class="col-md-4 col-sm-6">
									<div class="single-achivement">
										<a href="weather-bible" target="_blank"><img class="app-icons" src="../img/weather-bible-logo.png" alt="Weather Bible mobile app" title="Weather Bible"/></a>
										<h6><a href="weather-bible">Weather Bible (2020)</a></h6>
									</div>
								</div> -->
								<div class="col-md-4 col-sm-6">
									<div class="single-achivement">
										<a href="lifechurch" target="_blank"><img class="app-icons" src="../img/lclogo.jpg" alt="Life.Church" title="Life.Church"/></a>
										<h6><a href="lifechurch">SWE (2018)</a></h6>
									</div>
								</div>
								<!-- <div class="col-md-4 col-sm-6">
									<div class="single-achivement">
										<a href="openclassrooms" target="_blank"><img class="app-icons" src="../img/oclogo.png" alt="OpenClassrooms" title="OpenClassrooms"/></a>
										<h6><a href="openclassrooms">QA Engineering (2017)</a></h6>
									</div>
								</div> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    `
}});