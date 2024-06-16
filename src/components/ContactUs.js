import React from 'react';
import '../css/ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>Liên Hệ Với Chúng Tôi</h1>
      
      <section className="contact-details">
        <h2>Chi Tiết Liên Hệ Của Chúng Tôi</h2>
        <p>Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua các phương thức sau:</p>
        <ul>
        <li>Email: trquynhanh301001@gmail.com</li>
          <li>Điện thoại: 0903687298</li>
          <li>Địa chỉ: 554/31 cộng hoà, p13, tân bình</li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Biểu Mẫu Liên Hệ</h2>
        <p>Hoặc, bạn có thể điền vào biểu mẫu dưới đây và chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.</p>
        <form>
          <label>
            Tên:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Chủ đề:
            <input type="text" name="subject" required />
          </label>
          <label>
            Tin nhắn:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Gửi</button>
        </form>
      </section>

      <section className="office-locations">
        <h2>Địa Điểm Văn Phòng Của Chúng Tôi</h2>
        <p>Chúng tôi có văn phòng tại nhiều thành phố lớn. Bạn có thể ghé thăm chúng tôi tại bất kỳ địa điểm nào sau đây:</p>
        <ul>
          <li><strong>New York:</strong> 456 Broadway, New York, NY 10013</li>
          <li><strong>Los Angeles:</strong> 789 Hollywood Blvd, Los Angeles, CA 90028</li>
          <li><strong>Chicago:</strong> 123 Michigan Ave, Chicago, IL 60611</li>
        </ul>
      </section>

      <section className="customer-service">
        <h2>Dịch Vụ Khách Hàng</h2>
        <p>Đội ngũ dịch vụ khách hàng của chúng tôi luôn sẵn sàng hỗ trợ bạn với bất kỳ vấn đề nào. Giờ làm việc của chúng tôi là từ 9:00 AM đến 6:00 PM, từ Thứ Hai đến Thứ Sáu.</p>
        <p>Để được hỗ trợ ngay lập tức, bạn có thể sử dụng tính năng trò chuyện trực tiếp trên trang web của chúng tôi.</p>
      </section>

      <section className="social-media">
        <h2>Theo Dõi Chúng Tôi Trên Mạng Xã Hội</h2>
        <p>Cập nhật những tin tức và khuyến mãi mới nhất của chúng tôi bằng cách theo dõi chúng tôi trên mạng xã hội:</p>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </section>

      <section className="faq">
        <h2>Các Câu Hỏi Thường Gặp</h2>
        <p>Dưới đây là một số câu hỏi thường gặp mà chúng tôi nhận được từ khách hàng:</p>
        <ul>
          <li><strong>Q:</strong> Làm thế nào để tôi theo dõi đơn hàng của mình?<br/><strong>A:</strong> Bạn có thể theo dõi đơn hàng của mình bằng số theo dõi được cung cấp trong email xác nhận đơn hàng của bạn.</li>
          <li><strong>Q:</strong> Chính sách hoàn trả của bạn là gì?<br/><strong>A:</strong> Chúng tôi có chính sách hoàn trả trong vòng 30 ngày đối với tất cả các sản phẩm của mình. Vui lòng truy cập trang chính sách hoàn trả của chúng tôi để biết thêm chi tiết.</li>
          <li><strong>Q:</strong> Bạn có cung cấp dịch vụ vận chuyển quốc tế không?<br/><strong>A:</strong> Có, chúng tôi cung cấp dịch vụ vận chuyển quốc tế đến hầu hết các quốc gia. Chi phí và thời gian vận chuyển thay đổi tùy thuộc vào địa điểm.</li>
        </ul>
      </section>
    </div>
  );
}

export default ContactUs;
