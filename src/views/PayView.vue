<template>
    <div class="payment-view">
      <h2>Mpesa Payment</h2>
      <p>To access Iroko Premium, please complete your payment through Mpesa.</p>
      
      <form @submit.prevent="processPayment">
        <div class="form-group">
          <label for="phone">Enter your phone number:</label>
          <input 
            type="text" 
            id="phone" 
            v-model="phoneNumber" 
            placeholder="e.g., 0700123456"
            required
          />
        </div>
        
        <button type="submit">Pay with Mpesa</button>
      </form>
      
      <!-- Conditionally render the Back to Dashboard button -->
      <button 
        v-if="paymentSuccessful" 
        @click="goToDashboard" 
        class="back-button">
        Back to Dashboard
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaymentView',
    data() {
      return {
        phoneNumber: '',
        paymentSuccessful: false, // Track whether payment was successful
      };
    },
    methods: {
      processPayment() {
        if (this.isValidPhoneNumber(this.phoneNumber)) {
          // Simulate Mpesa payment process
          alert(`Processing payment for phone number: ${this.phoneNumber}`);
          // Simulate payment success
          this.paymentSuccessful = true;
        } else {
          alert('Please enter a valid phone number.');
        }
      },
      isValidPhoneNumber(number) {
        // Basic validation for Kenyan phone numbers (10 digits, starts with 07 or 01)
        const regex = /^(07|01)\d{8}$/;
        return regex.test(number);
      },
      goToDashboard() {
        // Navigate back to the dashboard
        this.$router.push('/dashboard');
      },
    },
  };
  </script>
  
  <style scoped>
  .payment-view {
    text-align: center;
    margin-top: 50px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-size: 1em;
    margin-bottom: 5px;
    display: block;
  }
  
  input {
    padding: 10px;
    width: 100%;
    max-width: 300px;
    font-size: 1em;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px 20px;
    background-color: #2c3e50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #34495e;
  }
  
  .back-button {
    margin-top: 20px;
    background-color: #2c3e50;
    color: #fff;
  }
  
  .back-button:hover {
    background-color: #34495e;
  }
  </style>
  
  
  