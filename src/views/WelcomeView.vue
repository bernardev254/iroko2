<template>
  <div class="welcome-view">
    <h1>Welcome to Iroko Premium!</h1>
    <p>
      Unlock the full potential of property management with Iroko Premium. 
    </p>

    <!-- Benefits Section -->
    <div class="benefits">
      <h2>Why Upgrade to Iroko Premium?</h2>
      <ul>
        <li>🚀 <strong>Automatic Issue Response</strong>: Automate issue resolution and experience seamless management.</li>
        <li>📊 <strong>Advanced Reporting</strong>: Access in-depth reports and analytics to make informed decisions.</li>
        <li>⚡ <strong>Priority Support</strong>: Get priority customer support for faster resolutions.</li>
      </ul>
    </div>

    <!-- Comparison Table -->
    <div class="comparison-table">
      <h2>Free vs Premium</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Free</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Property Management</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Rent Tracking</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Automatic Issue Response</td>
            <td>❌</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Advanced Reporting</td>
            <td>❌</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Priority Support</td>
            <td>❌</td>
            <td>✅</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Call to Action -->
    <!--router-link to="/sign-in" class="btn btn-primary">Get Started wi</router-link-->
    <router-link to="/pay" class="btn btn-upgrade">Upgrade to Premium</router-link>
  </div>
</template>

<script>
export default {
  name: 'WelcomeView',
};
</script>

<style scoped>
.welcome-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f5f5f5;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  margin-bottom: 40px;
}

.benefits {
  margin-bottom: 40px;
}

.benefits h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
}

.benefits ul {
  list-style-type: none;
  padding: 0;
}

.benefits li {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.comparison-table {
  margin-bottom: 40px;
}

.comparison-table h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
}

th {
  background-color: #2c3e50;
  color: white;
}

.btn {
  padding: 10px 20px;
  margin: 10px;
  background-color: #2c3e50;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
}

.btn-upgrade {
  background-color: #e74c3c;
}

.btn:hover {
  background-color: #34495e;
}

.btn-upgrade:hover {
  background-color: #c0392b;
}
</style>
