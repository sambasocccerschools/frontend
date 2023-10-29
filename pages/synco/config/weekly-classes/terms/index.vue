<script>
export default {
	data: () => ({
		// audiences: 8
		terms: [
			{ name: 'Autumn 23 Saturdays', sessions: 4 },
			{ name: '', sessions: 8 }
		]
	}),
	methods: {
		duplicateTerm() { console.log('duplicate') },
		sendToTrash() { console.log('sendToTrash') },
		saveTerm() { console.log('save Term') }
	}
}
</script>



<template>
	<NuxtLayout name="syncolayout">
		<div class="container-fluid">
			<div class="row">
				<div class="col">
					<h4 class="mb-4">Term Dates & Mapping Session Plans</h4>
					<h5 class="mb-4">Add a term</h5>


					<!-- Term Card -->
					<div class="card mb-3" v-for="term in terms">
						<div class="card-body p-4">
							<div class="row row-cols-2 gy-4">
								<div class="col">
									<label for="term-name">Term name</label>
									<input type="text" class="form-control mt-2" id="term-name" placeholder="Autumn 23 Saturdays"
										name="term-name">
								</div>
								<div class="col">
									<label for="term">Term</label>
									<input type="text" class="form-control mt-2" id="term" placeholder="Autumn" name="term">
								</div>
								<div class="col">
									<label for="start-date">Start date</label>
									<input type="date" class="form-control mt-2" id="start-date" name="start-date">
									<!-- <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" /> -->
								</div>
								<div class="col">
									<label for="end-date">End date</label>
									<input type="date" class="form-control mt-2" id="end-date" name="end-date">
								</div>
								<div class="col">
									<label for="half-term-exclusion-date">Half-Term Exclusion Date(s)</label>
									<input type="date" class="form-control mt-2" id="half-term-exclusion-date"
										name="half-term-exclusion-date">
								</div>
								<div class="col">
									<label for="total-number-of-sessions">Total Number of Sessions</label>
									<input type="number" class="form-control mt-2" id="total-number-of-sessions"
										name="total-number-of-sessions">
								</div>
							</div>
							<div class="d-flex align-items-center justify-content-between mt-4">
								<NuxtLink to="/synco/config/weekly-classes/terms/map-sessions" class="btn btn-outline-primary">Map
									Session</NuxtLink>
								<div>
									<button @click="duplicateTerm()" class="btn btn-outline-primary">Duplicate</button>
									<button @click="sendToTrash()" class="btn btn-link text-dark">
										<Icon name="ph:trash-thin" />
									</button>
								</div>
							</div>
						</div>
					</div>

					<button class="btn btn-primary btn-lg text-light" @click="terms++">Add New Term</button>
				</div>
				<div class="col">
					<h4 class="mb-4">Map Sessions Plans</h4>

					<div class="card mb-4" v-for="term in terms">
						<div class="card-header">
							<h4 class="card-title mt-3 h5">Sprint Term</h4>
							<div class="card-body px-2">
								<div class="row row-cols-2 gy-2">
									<div v-for="sessions in term.sessions" class="col">
										<div class="card border">
											<div class="card-body py-2">
												<div class="d-flex justify-content-between align-items-center">
													<strong>Session #</strong>
													<button class="btn btn-link p-0 btn-sm text-dark">
														<Icon name="ph:pencil-simple-line" />
													</button>
												</div>
												<div class="d-flex justify-content-between align-items-center">
													<small class="text-muted">Saturday, 9/9/2023, 11:00</small>
													<button class="btn btn-link p-0 btn-sm text-warning">
														<Icon name="ic:round-access-time-filled" />
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="d-flex justify-content-end">
						<button @click="saveTerm()" class="btn btn-primary btn-lg text-light px-5">Save</button>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>
 