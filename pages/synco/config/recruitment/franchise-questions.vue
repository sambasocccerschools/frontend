<script>
export default {
  data: () => ({
    questions: [
      { id: 1, text: 'Have you worked in a franchise before?', answers: [{ id: 1, text: 'Yes', score: 100 }, { id: 2, text: 'No', score: 0 }] }
    ]
  }),
  methods: {
    addAnswer() { console.log('add new answer') }
  }
}
</script>

<template>
  <NuxtLayout name="syncolayout">
    <h4 class="mb-4">Create Franchise questions</h4>
    <div class="card">
      <div class="card-header border-bottom border-light d-flex align-items-center justify-content-between">
        <h4 class="card-title mt-1">Questions</h4>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary text-light" data-bs-toggle="modal"
          data-bs-target="#addNewQuestionModal">
          + Add New Question
        </button>
      </div>

      <div class="card-body px-4 pb-5">
        <div class="card border" v-for="question in questions" draggable="true">
          <div class="card-header text-center py-0">
            <button class="btn btn-white py-1">
              <Icon name="teenyicons:drag-horizontal-outline" />
            </button>
          </div>
          <div class="card-body px-4 pt-0">
            <div class="d-flex align-items-center justify-content-between">
              <label :for="question.id">{{ question.text }}</label>
              <button type="button" class="btn btn-transparent btn-sm" data-bs-toggle="modal"
                data-bs-target="#addNewQuestionModal">
                <Icon name="humbleicons:dots-vertical" class="text-muted" />
              </button>
            </div>
            <p class="text-muted"><small>Answers ({{ question.answers.length }})</small></p>

            <span class="text-danger">How to remove an answer and a question? Why would a user be able to choose here? Do
              we add choices here or in the
              modal?</span>
            <div class="form-check d-flex align-items-center mb-2" v-for="answer in question.answers">
              <input class="form-check-input" type="radio" :name="question.id" :id="answer.id">
              <label class="form-check-label bg-light w-50 border py-2 px-3 ms-3 rounded-2" :for="answer.id">
                {{ answer.text }}
              </label>
            </div>
            <button class="btn btn-primary btn-sm text-light ms-5 mt-3" @click="addAnswer()">+ Add Choice</button>
          </div>
        </div>
      </div>
    </div>




    <!-- Add new question Modal  -->
    <!-- Add Role Modal -->
    <div class="modal fade centered " id="addNewQuestionModal" tabindex="-1" aria-labelledby="addNewQuestionModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content ">
          <div class="modal-header p-4">
            <h1 class="modal-title fs-3" id="addNewQuestionModalLabel">Add question type</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4">

            <div class="form-group mb-3">
              <label for="question" class="form-label">Question</label>
              <input type="text" class="form-control" id="question">
            </div>
            <div class="form-group ">
              <div class="row">
                <div class="col-9">
                  <label for="answer" class="form-label">Answer</label>
                </div>
                <div class="col">
                  <label for="score" class="form-label">Score</label>
                </div>
              </div>
              <div class="row">
                <div class="col-9">
                  <input type="text" class="form-control" name="answer" id="answer">
                </div>
                <div class="col">
                  <input type="number" class="form-control" name="score" id="score">
                </div>
              </div>
              <div class="mt-3">
                <button class="btn btn-primary text-light" @click="addAnswer()">Add new answer</button>
              </div>
            </div>
          </div>
          <div class="modal-footer border-0 p-4">
            <div class="d-flex w-100">
              <button type="button" class="btn btn-secondary w-100 me-2" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary w-100 text-light ms-2">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
 
 