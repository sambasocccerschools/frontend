<script setup lang="ts">
import { ref } from 'vue'

import type { IComment } from '~/types/index'

let newComment:string = ""
const comments:IComment[] = [
      {
        text:"Not 100% sure she can attend but if she cant she will email us.",
        avatar:"img-avatar-jaffar.png",
        name:"Ethan",
        created:"8 min ago",
      },
      {
        text:"Not 100% sure she can attend but if she cant she will email us. Not 100% sure she can attend but if she cant she will email us. Not 100% sure she can attend but if she cant she will email us.",
        avatar:"img-avatar-small.png",
        name:"Nilio Bagga",
        created:"8 min ago",
      }
    ]

const addComment = ()=>{
    console.log("add comment")
}

</script>

<template>
    <div class="card rounded-4 mt-4 px-3 py-4">
      <h3 class="pb-4"><strong>Comment</strong></h3>
      <div class="row">
        <div class="col-12 d-flex flex-row">
          <div class="d-flex align-items-center">
            <img
              src="@/src/assets/img-avatar-small.png"
              alt="Avatar"
              class="me-3"
            />
          </div>
          <div class="form-group px-4 w-100 d-flex flex-row align-items-center">
              <input
              id="comment"
              type="text"
              class="form-control form-control-lg"
              placeholder="Add a comment"
              v-model="newComment"
              />
          </div>
          <div>
            <button class="btn btn-primary text-light rounded btn-lg d-flex flex-row align-items-center h-100" @click="addComment">
              <Icon name="material-symbols:send" style="transform:rotate(-45deg)" />
            </button>
          </div>
        </div>
      </div>
      <template v-for="comment in comments">
        <div class="card rounded-4 mt-4 p-4" style="background-color: #FAFAFA;">
          <div class="row">
            <div class="col-12">
              <div class="form-group mb-3 w-100">
                  <p>{{ comment.text }}</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 d-flex flex-row justify-content-between">
              <div class="d-flex align-items-center">
                <img
                  src="@/src/assets/img-avatar-small.png"
                  alt="Avatar"
                  class="me-3"
                  style="width:36px; height:36px"
                />
                <span><strong>{{comment.name}}</strong></span>
              </div>
              <div class="d-flex align-items-center"><span>{{ comment.created }}</span></div>
            </div>
          </div>
        </div>
      </template>
    </div>
</template>