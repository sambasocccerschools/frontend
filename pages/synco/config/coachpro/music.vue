<script>
export default {
  data: () => ({
    songs: [
      { id: 1, name: 'Samba Track 1.mp3', filename: '@/src/assets/lifeisgood.mp3', duration: 230, date: '7 days ago' },
      { id: 2, name: 'Samba Track 2.mp3', filename: '@/src/assets/lifeisgood.mp3', duration: 260, date: '8 days ago' }
    ],
    selectedSong: null
  }),

}
</script>


<template>
  <NuxtLayout name="syncolayout">
    <div class="row">
      <div class="col">
        <div class="d-flex align-items-center justify-content-between">
          <h4 class="m-0">Samba Music</h4>
          <span class="d-flex flex-column">
            <span class="btn btn-sm btn-primary text-light">
              Upload Music <input type="file" id="myFile" name="filename">
            </span>
            <span class="text-danger">There's no design to upload an image</span>
          </span>
          <!-- <form action="/action_page.php">
            <input type="file" id="myFile" name="filename">
            <input type="submit">
          </form> -->
        </div>
        <table class="table table-hover table-sm border shadow-sm">
          <thead class="rounded-top-4">
            <tr class="table-light ">
              <!-- <th scope="col">Checkbox</th> -->
              <th scope="col">
                <label class="form-check-label ms-3 text-muted" for="all-table">
                  Title
                </label>
              </th>
              <th class="text-muted" scope="col">Duration</th>
              <th class="text-muted" scope="col">Date</th>
              <th class="text-muted" scope="col">Play</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="">
            <tr class="align-middle" v-for="song in songs" @click="selectedSong = song">
              <th scope="row">
                <label class="form-check-label ms-3 text-muted" for="chelsea">
                  {{ song.name }}
                </label>
              </th>
              <td>{{ songs.duration }} mins</td>
              <td>{{ song.date }}</td>
              <td>
                <Icon name="ic:round-play-circle-filled" class="h4 m-0 text-dark" />
              </td>
              <td class="text-end ">
                <button class="btn btn-sm btn-transparent">
                  <Icon name="bi:three-dots-vertical" /> <span class="text-danger">??</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="col-4" v-if="selectedSong">
        <div class="card  rounded-5" style="background-color: #363E49;">
          <div class="card-body pb-5">
            <h4 class="text-light text-center h4 mt-4 mb-3">Now Playing</h4>
            <div style="height:8rem;width:8rem" class="bg-dark rounded-4 mx-auto my-4"></div>
            <p class="text-light text-center">{{ selectedSong.name }}</p>
            <audio controls class="d-flex mx-auto">
              <!-- <source src="horse.ogg" type="audio/ogg"> -->
              <source src="@/src/assets/lifeisgood.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>


  </NuxtLayout>
</template>
 
 