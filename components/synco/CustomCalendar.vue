<template>
  <div class="calendar-container">
    <!-- Calendar Header -->
    <div class="calendar-header">
      <button
        class="header-arrow"
        :disabled="isPreviousMonthDisabled"
        @click="previousMonth"
      >
        &lt;
      </button>
      <span class="header-title" @click="toggleMonthYearPicker">
        {{ currentMonthName }} {{ currentYear }}
      </span>
      <button class="header-arrow" @click="nextMonth">&gt;</button>
    </div>

    <!-- Month-Year Picker Modal -->
    <div v-if="showMonthYearPicker" class="month-year-picker">
      <div class="picker-overlay" @click="toggleMonthYearPicker"></div>
      <div class="picker-modal">
        <h3>Select Month and Year</h3>
        <div class="year-picker">
          <button
            class="year-button"
            :disabled="pickerYear <= minYear"
            @click="decrementYear"
          >
            &lt;
          </button>
          <span class="picker-year">{{ pickerYear }}</span>
          <button class="year-button" @click="incrementYear">&gt;</button>
        </div>
        <div class="month-grid">
          <button
            v-for="(month, index) in months"
            :key="index"
            :class="[
              'month-button',
              { active: index === currentMonth && pickerYear === currentYear },
            ]"
            :disabled="isMonthDisabled(index)"
            @click="selectMonth(index)"
          >
            {{ month }}
          </button>
        </div>
        <button class="close-picker" @click="toggleMonthYearPicker">
          Close
        </button>
      </div>
    </div>

    <!-- Calendar Days -->
    <div class="calendar-grid">
      <div v-for="day in daysOfWeek" :key="day" class="calendar-day">
        {{ day }}
      </div>
      <div
        v-for="day in blankDays"
        :key="'blank-' + day"
        class="calendar-cell blank"
      ></div>
      <div
        v-for="(date, index) in daysInMonth"
        :key="index"
        class="calendar-cell"
        :class="{
          disabled: allowedDay && !isAllowedDay(date),
          enabled: !allowedDay || isAllowedDay(date),
          selected: isSelectedDate(date),
        }"
        @click="selectDate(date)"
      >
        <span>{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allowedDay: {
      type: Number, // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      required: false, // Puede no ser proporcionado
      default: null, // Si no se da, permite seleccionar cualquier día
    },
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      selectedDate: new Date().toISOString().split('T')[0], // Marca la fecha de hoy por defecto
      showMonthYearPicker: false,
      pickerYear: new Date().getFullYear(),
      minYear: new Date().getFullYear(),
      minMonth: new Date().getMonth(),
    }
  },
  computed: {
    months() {
      return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
    },
    daysOfWeek() {
      return ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    },
    currentMonthName() {
      return this.months[this.currentMonth]
    },
    daysInMonth() {
      const days = new Date(
        this.currentYear,
        this.currentMonth + 1,
        0,
      ).getDate()
      return Array.from({ length: days }, (_, i) => i + 1)
    },
    blankDays() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay()
    },
    isPreviousMonthDisabled() {
      return (
        this.currentYear === this.minYear && this.currentMonth <= this.minMonth
      )
    },
  },
  methods: {
    previousMonth() {
      if (!this.isPreviousMonthDisabled) {
        if (this.currentMonth === 0) {
          this.currentMonth = 11
          this.currentYear--
        } else {
          this.currentMonth--
        }
      }
    },
    nextMonth() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0
        this.currentYear++
      } else {
        this.currentMonth++
      }
    },
    isAllowedDay(date) {
      if (!this.allowedDay) return true // Si no hay restricciones, permite cualquier día
      const dayOfWeek = new Date(
        this.currentYear,
        this.currentMonth,
        date,
      ).getDay()
      return dayOfWeek === this.allowedDay // Compara con el día permitido
    },
    selectDate(date) {
      const selected = new Date(this.currentYear, this.currentMonth, date)
        .toISOString()
        .split('T')[0]
      this.selectedDate = selected // Marca la fecha seleccionada
      this.$emit('update:startDate', this.selectedDate) // Emitimos la fecha seleccionada
    },
    isSelectedDate(date) {
      const currentDate = new Date(this.currentYear, this.currentMonth, date)
        .toISOString()
        .split('T')[0]
      return currentDate === this.selectedDate
    },
    toggleMonthYearPicker() {
      this.showMonthYearPicker = !this.showMonthYearPicker
      this.pickerYear = this.currentYear
    },
    incrementYear() {
      this.pickerYear++
    },
    decrementYear() {
      if (this.pickerYear > this.minYear) {
        this.pickerYear--
      }
    },
    selectMonth(monthIndex) {
      if (
        this.pickerYear > this.minYear ||
        (this.pickerYear === this.minYear && monthIndex >= this.minMonth)
      ) {
        this.currentMonth = monthIndex
        this.currentYear = this.pickerYear
        this.showMonthYearPicker = false
      }
    },
    isMonthDisabled(monthIndex) {
      return this.pickerYear === this.minYear && monthIndex < this.minMonth
    },
  },
}
</script>

<style scoped>
.calendar-container {
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 8px;
  min-width: 320px;
  width: 100%;
  font-family: Arial, sans-serif;
  position: relative;
  background-color: #fff;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f9fafb;
  border-bottom: 1px solid #ddd;
}

.header-arrow {
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #2d3748;
}

.header-arrow:disabled {
  color: #cbd5e0;
  cursor: not-allowed;
}

.header-title {
  font-size: 16px;
  font-weight: bold;
  color: #2d3748;
  cursor: pointer;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  padding: 10px;
}

.calendar-day {
  text-align: center;
  font-weight: bold;
  padding: 5px 0;
  color: #4a5568;
}

.calendar-cell {
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
  border-radius: 100%;
  transition: background-color 0.3s;
  height: 40px;
  width: 40px;
}

.calendar-cell.disabled {
  color: #a0aec0;
  cursor: not-allowed;
}

.calendar-cell.enabled {
  background-color: #e6fffa;
  color: #2b6cb0;
}

.calendar-cell.enabled:hover {
  background-color: #81e6d9;
}

.calendar-cell.selected {
  background-color: #38a169;
  color: white;
  font-weight: bold;
}

.blank {
  background: transparent;
  cursor: default;
}

.month-year-picker {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.picker-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.picker-modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 20;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.year-picker {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.year-button {
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: #2d3748;
}

.year-button:disabled {
  color: #a0aec0;
  cursor: not-allowed;
}

.picker-year {
  font-size: 16px;
  font-weight: bold;
}

.month-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.month-button {
  padding: 10px;
  border: none;
  background-color: #edf2f7;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.month-button.active {
  background-color: #38a169;
  color: white;
}

.month-button:disabled {
  background-color: #e2e8f0;
  color: #a0aec0;
  cursor: not-allowed;
}

.close-picker {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #38a169;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.close-picker:hover {
  background-color: #2f855a;
}
</style>
