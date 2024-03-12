<script lang="ts" setup>
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'
import 'yup-phone-lite'
import type { ICreateUserParams } from '~/types/index'

const props = defineProps<{
  createMember(input: ICreateUserParams): Promise<void>
}>()

const schema = toTypedSchema(
  yup.object({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('First name is required'),
    phone_number: yup
      .string()
      .phone(null, 'Phone must be valid')
      .required('Phone is required'),
    password: yup.string().required('Password is required'),
    email: yup
      .string()
      .email('Email must be valid')
      .required('Email is required'),
    position: yup.string().required('Position is required'),
    avatar_image: yup.object(),
  }),
)
const { errors, defineField, handleSubmit, resetForm } = useForm({
  validationSchema: schema,
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [first_name, firstNameAttrs] = defineField('first_name')
const [last_name, lastNameAttrs] = defineField('last_name')
const [phone_number, phonNumberAttrs] = defineField('phone_number')
const [position, positionAttrs] = defineField('position')
const showPassword = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const picture = ref<File>()
const picturePreview = ref<string | null>(null)

const handlePictureChange = () => {
  const files = fileInput.value?.files
  const file = files?.[0]
  picture.value = file
  picturePreview.value = file ? URL.createObjectURL(file) : null
}

const onSubmit = handleSubmit(async (values) => {
  await props.createMember({
    ...values,
    password_confirmation: values.password,
    avatar_image: picture.value,
  })
  resetForm()
  fileInput.value = null
})
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<template>
  <form @submit="onSubmit">
    <div class="mb-3">
      <label for="first_name" class="form-label">First Name</label>
      <input
        id="first_name"
        v-model="first_name"
        type="text"
        class="form-control"
        v-bind="firstNameAttrs"
        placeholder="Enter first name"
      />
      <span v-if="errors.first_name" class="error">{{
        errors.first_name
      }}</span>
    </div>
    <div class="mb-3">
      <label for="last_name" class="form-label">Last Name</label>
      <input
        id="last_name"
        v-model="last_name"
        type="text"
        class="form-control"
        v-bind="lastNameAttrs"
        placeholder="Enter last name"
      />
      <span v-if="errors.last_name" class="error">{{ errors.last_name }}</span>
    </div>
    <div class="mb-3">
      <label for="position" class="form-label">Position</label>
      <input
        id="position"
        v-model="position"
        type="text"
        class="form-control"
        v-bind="positionAttrs"
        placeholder="Enter position"
      />
      <span v-if="errors.position" class="error">{{ errors.position }}</span>
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">Phone</label>
      <input
        id="phone"
        v-model="phone_number"
        type="phone"
        class="form-control"
        placeholder="Enter phone"
        v-bind="phonNumberAttrs"
      />
      <span v-if="errors.phone_number" class="error">{{
        errors.phone_number
      }}</span>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        class="form-control"
        placeholder="Enter email"
        v-bind="emailAttrs"
      />
      <span v-if="errors.email" class="error">{{ errors.email }}</span>
    </div>
    <!-- <div class="mb-3">
      <label for="role" class="form-label">Role</label>
      <select id="role" class="form-select" aria-label="role">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div> -->
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <div class="relative">
        <input
          id="password"
          v-model="password"
          class="form-control"
          :type="showPassword ? 'text' : 'password'"
          v-bind="passwordAttrs"
          placeholder="Enter password"
        />
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5"
        >
          <Icon
            :name="showPassword ? 'gridicons:not-visible' : 'gridicons:visible'"
            @click="togglePasswordVisibility"
          />
        </div>
      </div>
      <span v-if="errors.password" class="error">{{ errors.password }}</span>
    </div>
    <div class="mb-3 flex flex-col">
      <label for="profile-picture" class="form-label">Profile Picture</label>
      <input
        id="profile-picture"
        ref="fileInput"
        type="file"
        name="profile-picture"
        accept="image/*"
        required
        @change="handlePictureChange"
      />
      <img
        v-if="picturePreview"
        :src="picturePreview"
        style="max-width: 200px"
      />
    </div>
    <button type="submit" class="btn btn-primary text-light w-100 btn-lg">
      Add Member
    </button>
  </form>
</template>

<style>
.error {
  color: red;
}
</style>
